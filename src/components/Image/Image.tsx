import React, { HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import * as S from "./style";

interface DropDownProps extends HTMLAttributes<HTMLImageElement> {
  register: UseFormRegister<any>;
  registerKey: string;
}

export const Image: React.FC<DropDownProps> = (props) => {
  return (
    <S.Wrapper
      {...props.register(props.registerKey, { required: true })}
      {...props}
    ></S.Wrapper>
  );
};
