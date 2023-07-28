import { AllTypeActions } from "../types";

export const getPosts = (): any => {
  return {
    type: AllTypeActions.GET_POSTS,
  };
};

export const createDatas = (datas: string[]): any => {
  return {
    type: AllTypeActions.CREATE_DATAS,
    datas,
  };
};

// export const updateDatas = (id: string | number, datas: string): any => {
//   return {
//     type: AllTypeActions.UPDATE_DATAS,
//     id,
//     datas,
//   };
// };

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
