import { GlobalReducer, IAppRequestState, initialRequestState } from "./state";
import { AnyAction, Reducer } from "redux";
import { AllTypeActions } from "../types";

export const GetPostReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(state, action, AllTypeActions.GET_POSTS.toString());
};

export const CreateDatasReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(state, action, AllTypeActions.CREATE_DATAS.toString());
};

export const UpdateDatasReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(state, action, AllTypeActions.UPDATE_DATAS.toString());
};

export const DeleteDatasReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(state, action, AllTypeActions.DELETE_DATAS.toString());
};
