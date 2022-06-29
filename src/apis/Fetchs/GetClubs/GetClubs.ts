import { paramType } from "../../../types/ClubType";
import DefaultAxios from "../../DefaultAxios/DefaultAxios";

export const getClibsApi = (param?: paramType) => {
  return DefaultAxios.get(`/templates/ePNAVU1sgGtQ/data`, {
    params: { ...param },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    },
  });
};
