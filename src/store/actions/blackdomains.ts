import { AllTypeActions } from '../types';

export const getBlackdomains = (dataSearch: { skip: number; limit: number; text: string; filters?: object }): any => {
	return {
		type: AllTypeActions.GET_BLACKDOMAINS,
		dataSearch,
	};
};

export const createBlackdomain = (domains: string[]): any => {
	return {
		type: AllTypeActions.CREATE_BLACKDOMAIN,
		domains,
	};
};

export const updateBlackdomain = (id: string, domain: string): any => {
	return {
		type: AllTypeActions.UPDATE_BLACKDOMAIN,
		id,
		domain,
	};
};

export const deleteBlackdomain = (id: string): any => {
	return {
		type: AllTypeActions.DELETE_BLACKDOMAIN,
		id,
	};
};

export const deleteMultipleBlackdomain = (ids: string[]): any => {
	return {
		type: AllTypeActions.DELETE_MULTIPLE_BLACKDOMAIN,
		ids,
	};
};
