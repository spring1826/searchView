import React, { HTMLAttributes } from "react";
import * as S from "./style";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const Layout: React.FC<LayoutProps> = (props) => {
  return <S.Wrapper>{props.children}</S.Wrapper>;
};
