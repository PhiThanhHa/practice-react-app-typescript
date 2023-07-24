import { combineReducers } from 'redux';
import { IApplicationState } from './state';
import * as BLACKDOMAIN_REDUCERS from './blackdomain';

export const rootReducer = combineReducers<IApplicationState>({
	createBlackdomain: BLACKDOMAIN_REDUCERS.CreateBlackdomainReducer,
	blackdomains: BLACKDOMAIN_REDUCERS.GetBlackdomainsReducer,
	updateBlackdomain: BLACKDOMAIN_REDUCERS.UpdateBlackdomainReducer,
	deleteBlackdomain: BLACKDOMAIN_REDUCERS.DelBlackdomainReducer,
	deleteMultipleBlackdomain: BLACKDOMAIN_REDUCERS.DelMultipleBlackdomainReducer,
});
export const ApplicationState = (state: any, action: any) => {
	return rootReducer(state, action);
};

export * from './state';
