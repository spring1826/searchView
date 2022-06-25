import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useProducts } from "../../apis/Querys/useProducts/useProducts";
import { SearchInput } from "../../components/Input/SearchInput/SearchInput";
import * as S from "./style";

export type Input = {
  place: string;
  dayOfWeek: string;
  category: string;
  interest: string;
  searchKeyword: string;
};

const Home: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Input>();
  console.log(watch("searchKeyword"));
  const { data, isFetching, isLoading } = useProducts();

  if (isLoading) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <SearchInput
        placeholder="검색어를 입력하세요"
        type="search"
        register={register}
      />
    </S.Wrapper>
  );
};

export default Home;
