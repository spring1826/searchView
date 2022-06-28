import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useClubs } from "../../apis/Querys/useClubs/useClubs";
import { Club } from "../../components/Club/Club";
import {
  FilterContext,
  initFilterContextState,
} from "../../contexts/filterContext";
import { useSearchUrl } from "../../hooks/useSearchUrl";
import { ClubType } from "../../types/ClubType";
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
  const filterContext = useContext(FilterContext);
  const navigate = useNavigate();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Input>();

  const { data, isFetching, isLoading } = useClubs();

  // searchKeyword가 있는 경우
  const handleSearchKeyword = () => {
    filterContext.searchKeyword = watch("searchKeyword");
    navigate(`/${useSearchUrl(filterContext)}`);
  };

  // 초기화
  const handleResetButton = () => {
    filterContext.categoryFilter = [];
    filterContext.dayFilter = [];
    filterContext.placeFilter = [];
    filterContext.searchKeyword = "";
    filterContext.typeFilter = [];
    navigate(`/`);
  };

  useEffect(() => {
    // url을 확인 후 체크박스 값 적용
    console.log(filterContext);
  }, []);

  if (isLoading || !data) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <FilterContext.Provider value={initFilterContextState}>
        <SearchHeader
          register={register}
          handleSearchKeyword={handleSearchKeyword}
          handleResetButton={handleResetButton}
        />
      </FilterContext.Provider>
      <S.Container>
        {data.pages[0].data.map((data: ClubType, idx: number) => {
          return (
            <Club
              key={idx}
              data={data}
              onClick={() => navigate(`/${data.club.id}`)}
            />
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
