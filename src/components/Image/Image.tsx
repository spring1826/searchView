import React, { HTMLAttributes } from "react";
import * as S from "./style";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  return <S.Wrapper {...props}></S.Wrapper>;
};
