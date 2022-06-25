import React, { HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { Input } from "../../../pages/Home/home";
import * as S from "./style";

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  register: UseFormRegister<any>;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <S.Wrapper
      {...props.register("searchKeyword", { required: true })}
      {...props}
    ></S.Wrapper>
  );
};
