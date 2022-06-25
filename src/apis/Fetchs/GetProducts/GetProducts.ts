import DefaultAxios from "../../DefaultAxios/DefaultAxios";

export const getProductsApi = () => {
  return DefaultAxios.get(`/templates/ePNAVU1sgGtQ/data`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    },
  });
};
