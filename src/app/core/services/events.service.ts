import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {
	JNAJAppState,
	SamplesActions as samples,
	SearchActions as search,
	LayoutActions as layout,
	NavigationActions as navigation,
	UserProfileActions as userProfile,
	//AlertActions as alert,
	//FormsActions as forms,
	//VendorsActions as vendors,
	//JNAJMapActions as jMap
} from '../store';
declare const here:any;

@Injectable()
export class AppEvents {
	constructor(private router:Router,private store:Store<JNAJAppState>){}
	do(action:string,payload?:any){
		this.store.dispatch(this[action]?
			this[action](payload):
			this.noAction(action));}
	showJavaSamples = () => new samples.LoadJavaSamples();
	showAngularSamples = () => new samples.LoadAngularSamples();
	showFavoriteSamples = (p) => new samples.LoadFavoriteSamples(p);
	updateQuery = (p) => new search.updateCurrentQuery(p);
	updateSuggestions = (p) => new search.updateSuggestions(p);
	getSuggestions = (p) => new search.getSuggestions(p);
	addSuggestion = (p) => new search.addSuggestion(p);
	searchQuery = (p) => new search.searchCurrentQuery();
	searchMore = () => new search.searchMoreForQuery();
	resetPgTkn = (p) => new search.resetPageToken(p);
	updateParam = (p) => new search.updateQueryParam(p);
	toggleAdvSearch = () => new search.toggleAdvSearch();
	toggleSidebar = () => new layout.toggleSidebar();
	closeSidebar = () => new layout.closeSidebar();
	toggleIsIntro = (p) => new layout.toggleIsIntro(p);
	checkVersion = () => new layout.checkVersion();
	getVersion = (p) => new layout.getVersion(p);
	receivedVersion = (p) => new layout.receivedVersion(p);
	updateVersion = () => new layout.updateVersion();
	go = (p) => new navigation.go(p);
	back = () => new navigation.back();
	forward = () => new navigation.forward();
	//navStart = (p) => new navigation.start(p);
	//navComplete = (p) => new navigation.complete(p);
	//history = () => new navigation.history();
	noAction = (a) => {return {type:'ACTION_NOT_FOUND',payload:a}};
}

/*loadMap = (p) => new fuMap.loadMap(p);
	updHeaderMain = (p) => new layout.updateHeaderMain(p);
	showAlert = (p) => new alert.showAlert(p);
	hideAlert = () => new alert.hideAlert();
	confirmAlert = () => new alert.confirmAlert();
	toggleForm = (p) => new forms.toggleForm(p);
	cancelForm = () => new forms.cancelForm();
	submitForm = (p) => new forms.submitForm(p);
	createVendor = () => new forms.toggleForm('vendor-profile');
	editVendor = () => new forms.toggleForm('edit-vendor-profile');
	getXY = () => new forms.toggleForm('getXY');
	signin = () => new forms.toggleForm('signin');
	locateUser = () => new user.loadLocation();
	signout = () => new user.signOut();
	loadVendors = () => new vendors.loadVendors();
	loadVendor = (p) => new vendors.loadVendor(p);
	loadReviews = () => new vendors.loadReviews();
	loadOrders = () => new vendors.loadOrders();
	deleteVendor = () => new vendors.deleteVendorAcct();
	deleteAll = () => new vendors.deleteAll();
	fave = () => new vendors.faveVendor();
	unfave = () => new vendors.unfaveVendor();
	like = () => new vendors.likeVendor();
	unlike = () => new vendors.unlikeVendor();
	rate = (p) => new vendors.rateVendor(p);
	*/