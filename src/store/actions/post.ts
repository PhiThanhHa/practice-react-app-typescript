import { AllTypeActions } from "../types";

export const getPosts = (): any => {
  return {
    type: AllTypeActions.GET_POSTS,
  };
};

export interface ICreateDatas {
  title: string;
  body: string;
  userId: number;
}

export const createDatas = (datas: ICreateDatas): any => {
  return {
    type: AllTypeActions.CREATE_DATAS,
    datas,
  };
};

export interface IUpdateDatas extends ICreateDatas {
  id: number;
}

export const updateDatas = (datas: IUpdateDatas): any => {
  return {
    type: AllTypeActions.UPDATE_DATAS,
    datas,
  };
};

export const deleteDatas = (id: any): any => {
  return {
    type: AllTypeActions.DELETE_DATAS,
    id,
  };
};

// export const deleteMultipleDatas = (ids: string[]): any => {
//   return {
//     type: AllTypeActions.DELETE_MULTIPLE_DATAS,
//     ids,
//   };
// };

// export const getPosts = (): any => {
//   return {
//     type: AllTypeActions.GET_POSTS,
//   };
// };

// export const getPosts = (): any => {
//   return {
//     type: AllTypeActions.GET_POSTS,
//   };
// };
