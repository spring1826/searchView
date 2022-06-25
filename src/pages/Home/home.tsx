import React from "react";
import { useProducts } from "../../apis/Querys/useProducts/useProducts";
import * as S from "./style";

const Home: React.FC = () => {
  const { data, isFetching, isLoading } = useProducts();

  if (isLoading) return <div>Loading</div>;

  return <S.Wrappwe>Home</S.Wrappwe>;
};

export default Home;
