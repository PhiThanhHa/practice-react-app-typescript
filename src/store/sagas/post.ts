import { put, takeLatest } from "redux-saga/effects";
import { AllTypeActions } from "../types";
import { AnyAction } from "redux";
import { ENDPOINTS, getApiUrl } from "../endpoints";
import { Requests } from "../requests";

function* getPosts({ type }: AnyAction): Generator<any> {
  yield put({ type: `${type}_ATTEMPT` });
  try {
    const apiUrl = getApiUrl(ENDPOINTS.GET_POST);
    const data: any = yield Requests.get(apiUrl, {}, false);
    console.log(data);

    if (data) {
      yield put({ type: `${type}_SUCCESS`, data: data });
    } else {
      yield put({ type: `${type}_FAIL`, error: data.message });
    }
  } catch (e: any) {
    yield put({ type: `${type}_FAIL`, error: e.toString() });
  }
}

function* createDatas({ datas, type }: AnyAction): Generator<any> {
  yield put({ type: `${type}_ATTEMPT` });
  try {
    const apiUrl = getApiUrl(ENDPOINTS.GET_POST);
    const data: any = yield Requests.post(apiUrl, datas, false);
    if (data) {
      yield put({ type: `${type}_SUCCESS`, data });
    } else {
      yield put({ type: `${type}_FAIL`, error: data.message });
    }
  } catch (e: any) {
    yield put({ type: `${type}_FAIL`, error: e.toString() });
  }
}

function* updateDatas({ id, datas, type }: AnyAction): Generator<any> {
  yield put({ type: `${type}_ATTEMPT` });
  try {
    const apiUrl = getApiUrl(ENDPOINTS.UPDATE_DATAS, { id });
    const data: any = yield Requests.put(apiUrl, datas);
    if (data) {
      yield put({ type: `${type}_SUCCESS`, data });
    } else {
      yield put({ type: `${type}_FAIL`, error: data.message });
    }
  } catch (e: any) {
    yield put({ type: `${type}_FAIL`, error: e.toString() });
  }
}

function* deleteDatas({ id, type }: AnyAction): Generator<any> {
  yield put({ type: `${type}_ATTEMPT` });
  try {
    const apiUrl = getApiUrl(ENDPOINTS.UPDATE_DATAS, { id });
    const data: any = yield Requests.delete(apiUrl);
    if (data) {
      yield put({ type: `${type}_SUCCESS`, data });
    } else {
      yield put({ type: `${type}_FAIL`, error: data.message });
    }
  } catch (e: any) {
    yield put({ type: `${type}_FAIL`, error: e.toString() });
  }
}

export function* postAction() {
  yield takeLatest(AllTypeActions.GET_POSTS, getPosts);
  yield takeLatest(AllTypeActions.CREATE_DATAS, createDatas);
  // yield takeLatest(AllTypeActions.UPDATE_DATAS, updateDatas);
  yield takeLatest(AllTypeActions.DELETE_DATAS, deleteDatas);
}
