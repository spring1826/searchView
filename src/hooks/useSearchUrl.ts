import { initFilterContextStateType } from "../contexts/filterContext";

export const useSearchUrl = (filterContext: initFilterContextStateType) => {
  let paramsUrl = "";

  if (filterContext.searchKeyword.length > 0) {
    paramsUrl = paramsUrl + `searchKeyword=${filterContext.searchKeyword}&`;
  }
  if (filterContext.categoryFilter.length > 0) {
    paramsUrl =
      paramsUrl + `categoryFilter=${filterContext.categoryFilter.join("&")}`;
  }
  if (filterContext.dayFilter.length > 0) {
    paramsUrl = paramsUrl + `dayFilter=${filterContext.dayFilter.join("&")}`;
  }
  if (filterContext.placeFilter.length > 0) {
    paramsUrl =
      paramsUrl + `placeFilter=${filterContext.placeFilter.join("&")}`;
  }
  if (filterContext.typeFilter.length > 0) {
    paramsUrl = paramsUrl + `typeFilter=${filterContext.typeFilter.join("&")}`;
  }

  return `apply?${paramsUrl}`;
};
