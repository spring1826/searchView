import React from "react";
import { useProducts } from "../../apis/Querys/useProducts/useProducts";
import { Input } from "../../components/Input/Input";
import * as S from "./style";

const Home: React.FC = () => {
  const { data, isFetching, isLoading } = useProducts();

  if (isLoading) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <Input placeholder="검색어를 입력하세요" type="search" />
    </S.Wrapper>
  );
};

export default Home;
