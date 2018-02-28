import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {
	/*HomeBanner,
	ProfileBanner,
	FormModal,
	SearchForm,
	SearchTagLists,
	AuthForm,
	ArticleMeta,
	ArticlePreview,
	MenuItemMeta,
	MenuItem,
	ReviewMeta,
	ReviewItem,
	ReviewForm,
	VendorMeta,
	VendorItem,
	VendorForm,
	TagItem,
	SearchTagItem,
	ItemList,
	FavoriteButton,
	FollowButton,
	LinkButton,
	FaveButton,
	ErrorsList,
	NavBar,
	Pagination,
	LoadingIndicator,*/} from './components';
import {
	ShowIfAuthedDirective,
	EditingProfileDirective,
	FetchImageDirective} from './directives';

export const COMPONENTS = [
	/*HomeBanner,
	ProfileBanner,
	FormModal,
	SearchForm,
	SearchTagLists,
	AuthForm,
  ArticleMeta,
  ArticlePreview,
  MenuItemMeta,
  MenuItem,
  ReviewMeta,
  ReviewItem,
  ReviewForm,
  VendorMeta,
  VendorItem,
  VendorForm,
  TagItem,
  SearchTagItem,
  ItemList,
  FavoriteButton,
  FollowButton,
  LinkButton,
  FaveButton,
  ErrorsList,
  NavBar,
  LoadingIndicator,
  Pagination*/];
export const DIRECTIVES = [
	ShowIfAuthedDirective,
	EditingProfileDirective,
	FetchImageDirective];
export const PIPES = [];
export const ROUTING:ModuleWithProviders = RouterModule.forChild([]);