import { Injectable,} from '@angular/core';
import { Store } from '@ngrx/store';
import { FuState } from '../store';
import { LayoutActions } from '../store/layout';
//import { SearchActions } from '../store/search';
//import { AlertActions } from '../store/alert';
//import { FormsActions } from '../store/forms';
//import { VendorsActions  } from '../store/vendors';
//import { UserProfileActions } from '../store/user-profile';
//import { MapActions } from '../store/map';
//import { NavigationActions } from '../store/navigation';

@Injectable()
export class AppEvents { 
	/*constructor(
		//private router:Router,
		private store:Store<FuState>,
		private layout:LayoutActions,
		private navigation:NavigationActions,
		private search:SearchActions,
		private alert:AlertActions,
		private forms:FormsActions,
		private vendors:VendorsActions,
		private user:UserProfileActions,
		private fuMap:MapActions){}
	emit(action:string,payload?:any){
		this.store.dispatch(this[action]?
			this[action](payload):this.noAction(action));}
	loadMap = (p) => this.fuMap.loadMap(p);
	//updateVersion = () => this.layout.updateVersion();
	//checkVersion = () => this.layout.checkVersion();
	toggleSidebar = () => this.layout.toggleSidebar();
	updHeaderMain = (p) => this.layout.updateHeaderMain(p);
	showAlert = (p) => this.alert.showAlert(p);
	hideAlert = () => this.alert.hideAlert();
	confirmAlert = () => this.alert.confirmAlert();
	toggleForm = (p) => this.forms.toggleForm(p);
	cancelForm = () => this.forms.cancelForm();
	submitForm = (p) => this.forms.submitForm(p);
	createVendor = () => this.forms.toggleForm('vendor-profile');
	editVendor = () => this.forms.toggleForm('edit-vendor-profile');
	getXY = () => this.forms.toggleForm('getXY');
	signin = () => this.forms.toggleForm('signin');
	searchQ = (p) => this.search.searchNewQuery(p);
	searchMore = () => this.search.searchMoreForQuery();
	resetPgTkn = () => this.search.resetPageToken();
	updateParam = (p) => this.search.updateQueryParam(p);
	locateUser = () => this.user.loadLocation();
	signout = () => this.user.signOut();
	loadVendors = () => this.vendors.loadVendors();
	loadVendor = (p) => this.vendors.loadVendor(p);
	loadReviews = () => this.vendors.loadReviews();
	loadOrders = () => this.vendors.loadOrders();
	deleteVendor = () => this.vendors.deleteVendorAcct();
	deleteAll = () => this.vendors.deleteAll();
	fave = () => this.vendors.faveVendor();
	unfave = () => this.vendors.unfaveVendor();
	like = () => this.vendors.likeVendor();
	unlike = () => this.vendors.unlikeVendor();
	rate = (p) => this.vendors.rateVendor(p);
	goBack = () => this.navigation.goBack();
	navStart = (p) => this.navigation.start(p);
	navComplete = (p) => this.navigation.complete(p);
	showHistory = () => this.navigation.showHistory();
	noAction = (a) => {
		console.log('ACTION NOT FOUND IN APP EVENTS:',a);
		return {type:'ACTION NOT FOUND IN APP EVENTS',payload:a}};*/
}