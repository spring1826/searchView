import React, { HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import * as S from "./style";

interface DropDownProps extends HTMLAttributes<HTMLSelectElement> {
  register: UseFormRegister<any>;
  registerKey: string;
  optionList: string[];
}

export const DropDown: React.FC<DropDownProps> = (props) => {
  return (
    <S.Wrapper
      {...props.register(props.registerKey, { required: true })}
      {...props}
    >
      {props.optionList.map((option, idx) => {
        return (
          <option key={idx} value={option}>
            {option}
          </option>
        );
      })}
    </S.Wrapper>
  );
};
