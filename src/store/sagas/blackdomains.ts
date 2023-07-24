import { AllTypeActions } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import { Requests } from '../requests';
import { AnyAction } from 'redux';
import { getApiUrl, ENDPOINTS } from '../endpoints';

function* createBlackdomain({ domains, type }: AnyAction): Generator<any> {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_BLACK_DOMAINS);
		const data: any = yield Requests.post(apiUrl, { domains });
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e: any) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getBlackdomains({ dataSearch, type }: AnyAction): Generator<any> {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_BLACK_DOMAINS);
		const data: any = yield Requests.put(apiUrl, { ...dataSearch }, true, true);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.domains, total: data.total });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e: any) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* updateBlackdomain({ id, domain, type }: AnyAction): Generator<any> {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.UPDATE_BLACK_DOMAIN, { id });
		const data: any = yield Requests.put(apiUrl, { domain });
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e: any) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* deleteBlackdomain({ id, type }: AnyAction): Generator<any> {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.UPDATE_BLACK_DOMAIN, { id });
		const data: any = yield Requests.delete(apiUrl);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e: any) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* deleteMultipleDomain({ ids, type }: AnyAction): Generator<any> {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_BLACK_DOMAINS);
		const data: any = yield Requests.delete(apiUrl, { ids }, true, true);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e: any) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

export function* blackdomainActions() {
	yield takeLatest(AllTypeActions.CREATE_BLACKDOMAIN, createBlackdomain);
	yield takeLatest(AllTypeActions.GET_BLACKDOMAINS, getBlackdomains);
	yield takeLatest(AllTypeActions.UPDATE_BLACKDOMAIN, updateBlackdomain);
	yield takeLatest(AllTypeActions.DELETE_BLACKDOMAIN, deleteBlackdomain);
	yield takeLatest(AllTypeActions.DELETE_MULTIPLE_BLACKDOMAIN, deleteMultipleDomain);
}
