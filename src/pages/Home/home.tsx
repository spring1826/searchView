import React from "react";
import { useForm } from "react-hook-form";
import { useClubs } from "../../apis/Querys/useClubs/useClubs";
import { SearchHeader } from "./components/SearchHeader/SearchHeader";
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
  const { data, isFetching, isLoading } = useClubs();
  console.log(data);

  if (isLoading) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <SearchHeader register={register} />
    </S.Wrapper>
  );
};

export default Home;
