export const resetData = (type: string): any => {
  return {
    type: `${type}_SUCCESS`,
    data: null,
  };
};

export * from "./blackdomains";
export * from "./post";
