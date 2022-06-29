export const useParamsToFilterContext = (params: string) => {
  const result: { title: string; value: any }[] = [];
  const paramsArray = decodeURIComponent(params).split("&");

  paramsArray.map((param) => {
    if (param.includes("=")) {
      const array = param.split("=");

      result.push({ title: array[0], value: [array[1]] });
    } else {
      result[result.length - 1].value = [
        ...result[result.length - 1].value,
        param,
      ];
    }
  });

  return result;
};
