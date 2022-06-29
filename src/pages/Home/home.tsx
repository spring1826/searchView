import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useClubs } from "../../apis/Querys/useClubs/useClubs";
import { Club } from "../../components/Club/Club";
import {
  FilterContext,
  initFilterContextState,
} from "../../contexts/filterContext";
import { useParamsToFilterContext } from "../../hooks/useParamsToFilterContext";
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
    formState: { errors },
  } = useForm<Input>();

  const { data, isLoading } = useClubs();

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
    // url을 확인 후 filterContext 값 적용
    if (location.search.substring(1)) {
      const paramsArray = useParamsToFilterContext(
        location.search.substring(1)
      );

      paramsArray.map(({ title, value }) => {
        if (title === "searchKeyword") {
          filterContext.searchKeyword = value;
        }
        if (title === "categoryFilter") {
          filterContext.categoryFilter = value;
        }
        if (title === "dayFilter") {
          filterContext.dayFilter = value;
        }
        if (title === "placeFilter") {
          filterContext.placeFilter = value;
        }
        if (title === "typeFilter") {
          filterContext.typeFilter = value;
        }
      });
    }
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
              onClick={() => navigate(`/club/${data.club.id}`)}
            />
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
