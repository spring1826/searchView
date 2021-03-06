import React from "react";

export type initFilterContextStateType = {
  searchKeyword: string;
  placeFilter: string[];
  dayFilter: string[];
  typeFilter: string[];
  categoryFilter: string[];
};

export const initFilterContextState: any = {
  searchKeyword: "",
  placeFilter: [],
  dayFilter: [],
  typeFilter: [],
  categoryFilter: [],
};

export const FilterContext = React.createContext(initFilterContextState);
