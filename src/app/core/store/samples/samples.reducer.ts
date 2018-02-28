import * as SamplesActions from './samples.actions';
import {SamplesState,initialState,JAVA_SAMPLES,ANGULAR_SAMPLES} from './samples.model';

export function samplesReducer(state = initialState,action:SamplesActions.All):SamplesState{
  switch(action.type){
    case SamplesActions.JAVA:{return {samples:JAVA_SAMPLES};}
    case SamplesActions.ANGULAR:{return {samples:ANGULAR_SAMPLES};} 
    case SamplesActions.MY_SAMPLES:{return {samples:action.payload};}    
    default:{return state;}}}