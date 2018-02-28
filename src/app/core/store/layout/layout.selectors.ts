import {createFeatureSelector,createSelector} from '@ngrx/store';
import {AppSettings} from './layout.model';

export const getLayout$ = createFeatureSelector<AppSettings>('layout');
export const getVersion$ = createSelector(getLayout$,(s:AppSettings) => s.version);
export const getSidebarOpen$ = createSelector(getLayout$,(s:AppSettings) => s.sidebarOpen);
export const getMainNav$ = createSelector(getLayout$,(s:AppSettings) => s.mainNav);
export const getFooterNav$ = createSelector(getLayout$,(s:AppSettings) => s.footerNav);
export const isIntro$ = createSelector(getLayout$,(s:AppSettings) => s.isIntro);