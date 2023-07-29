import { forEach } from "lodash";

const URL = "https://jsonplaceholder.typicode.com";

export const ENDPOINTS = {
  GET_BLACK_DOMAINS: "/api/blackdomains",
  UPDATE_BLACK_DOMAIN: "/api/blackdomain/:id",
  GET_POST: `${URL}/posts`,
  UPDATE_DATAS: `${URL}/posts/:id`,
};

export const getApiUrl = (endpoint: string, params?: any): string => {
  let path = endpoint;
  if (params) {
    forEach(params, (value: any, key: any) => {
      const replace = `:${key}`;
      if (path.indexOf(replace) !== -1) {
        const re = new RegExp(replace, "g");
        path = path.replace(re, value.toString());
      }
    });
  }
  return path;
};
