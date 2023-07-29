import { AnyAction } from "redux";
import * as INTERFACES from "../interfaces";

export interface IFilterQuery {
  field_name: string;
  operator: string;
  compare_value: string | number;
}

export interface FilterItem {
  value: string | number;
  operator: string;
  label: string;
  id: string;
}

export interface IAppRequestState<T = any> {
  isFetching: boolean;
  data: T;
  error: string;
  total?: number;
}

export const initialRequestState: IAppRequestState<null> = {
  isFetching: false,
  data: null,
  error: "",
  total: 1,
};

export interface SigninInput {
  username: string;
  password: string;
}

export interface InspirationInput {
  name: string;
  sentence: string;
  enable: boolean;
  woman: boolean;
  man: boolean;
  translation?: { language: string; sentence: string }[];
}
export interface QuestionTrans {
  readonly language: string;
  readonly sentence: string;
}
export interface IProfileQuestion {
  id: string;
  key: string;
  sentence: string;
  woman: boolean;
  man: boolean;
  enable: boolean;
  translations: QuestionTrans[];
}

export interface IReportState<T = any> extends IAppRequestState {
  total_abuse_report?: number;
  total_moderator_report?: number;
  total_report?: number;
}

export const initialReportState: IReportState<null> = {
  isFetching: false,
  data: null,
  error: "",
  total: 1,
  total_abuse_report: 1,
  total_moderator_report: 1,
  total_report: 1,
};

export type AlertSeverity =
  | "success"
  | "info"
  | "warning"
  | "error"
  | undefined;

export interface IApplicationState {
  createBlackdomain: IAppRequestState;
  blackdomains: IAppRequestState<INTERFACES.IDataItemBlackDomain[]>;
  updateBlackdomain: IAppRequestState;
  deleteBlackdomain: IAppRequestState;
  deleteMultipleBlackdomain: IAppRequestState;
  postList: IAppRequestState;
  createDatas: IAppRequestState;
  updateData: IAppRequestState;
  deleteData: IAppRequestState;
}

// interface DataListPhoneCarriers extends IAppRequestState {
// 	data: DataPhoneCarrier[];
// }

export const GlobalReducer = (
  state: IAppRequestState,
  action: AnyAction,
  actionType: string
): IAppRequestState | IReportState => {
  switch (action.type) {
    case `${actionType}_ATTEMPT`: {
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    }
    case `${actionType}_SUCCESS`: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: "",
      };
    }
    case `${actionType}_FAIL`: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
        data: null,
      };
    }
    default:
      return state;
  }
};
