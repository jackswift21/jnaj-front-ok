import {createFeatureSelector,createSelector} from '@ngrx/store';
import {SamplesState} from './samples.model';

export const getSamplesState$ = createFeatureSelector<SamplesState>('samples');
export const getSamples$ = createSelector(getSamplesState$,(s:SamplesState) => s.samples);