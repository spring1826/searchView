import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useClubs } from "../../apis/Querys/useClubs/useClubs";
import { Club } from "../../components/Club/Club";
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
  const navigate = useNavigate();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Input>();
  const { data, isFetching, isLoading } = useClubs();
  console.log(data);

  if (isLoading || !data) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <SearchHeader register={register} />
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
