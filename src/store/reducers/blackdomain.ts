import { AnyAction, Reducer } from "redux";
import { IAppRequestState, initialRequestState, GlobalReducer } from "./state";
import { AllTypeActions } from "../types";

export const GetBlackdomainsReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(
    state,
    action,
    AllTypeActions.GET_BLACKDOMAINS.toString()
  );
};

export const CreateBlackdomainReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(
    state,
    action,
    AllTypeActions.CREATE_BLACKDOMAIN.toString()
  );
};

export const UpdateBlackdomainReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(
    state,
    action,
    AllTypeActions.UPDATE_BLACKDOMAIN.toString()
  );
};

export const DelBlackdomainReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(
    state,
    action,
    AllTypeActions.DELETE_BLACKDOMAIN.toString()
  );
};

export const DelMultipleBlackdomainReducer: Reducer = (
  state: IAppRequestState = initialRequestState,
  action: AnyAction
) => {
  return GlobalReducer(
    state,
    action,
    AllTypeActions.DELETE_MULTIPLE_BLACKDOMAIN.toString()
  );
};
