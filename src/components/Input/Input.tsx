import React, { HTMLAttributes } from "react";
import * as S from "./style";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return <S.Wrapper {...props}></S.Wrapper>;
};
