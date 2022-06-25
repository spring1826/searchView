import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useProducts } from "../../apis/Querys/useProducts/useProducts";
import { DropDown } from "../../components/DropDown/DropDown";
import { SearchInput } from "../../components/Input/SearchInput/SearchInput";
import * as S from "./style";

export type Input = {
  place: string;
  dayOfWeek: string;
  category: string;
  interest: string;
  searchKeyword: string;
};

const PLACE_OPTION_LIST = [
  "장소",
  "강남 아지트",
  "안국 아지트",
  "온라인",
  "그 외 장소",
];

const Home: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Input>();
  console.log(watch());
  const { data, isFetching, isLoading } = useProducts();

  if (isLoading) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <SearchInput
        placeholder="검색어를 입력하세요"
        type="search"
        register={register}
      />
      <DropDown
        register={register}
        registerKey={"place"}
        optionList={PLACE_OPTION_LIST}
      />
      <DropDown
        register={register}
        registerKey={"dayOfWeek"}
        optionList={PLACE_OPTION_LIST}
      />
      <DropDown
        register={register}
        registerKey={"category"}
        optionList={PLACE_OPTION_LIST}
      />
      <DropDown
        register={register}
        registerKey={"interest"}
        optionList={PLACE_OPTION_LIST}
      />
    </S.Wrapper>
  );
};

export default Home;
