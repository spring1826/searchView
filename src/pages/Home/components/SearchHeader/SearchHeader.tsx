import React, { HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import {
  CATEGORY_OPTION_LIST,
  DAY_OF_WEEK_OPTION_LIST,
  INTEREST_OPTION_LIST,
  PLACE_OPTION_LIST,
} from "../../../../constants/HomeConstant";
import { Image } from "../../../../components/Image/Image";
import { DropDown } from "../../../../components/DropDown/DropDown";
import { SearchInput } from "../../../../components/Input/SearchInput/SearchInput";
import * as S from "./style";

interface SearchHeaderProps extends HTMLAttributes<HTMLDivElement> {
  register: UseFormRegister<any>;
}

export const SearchHeader: React.FC<SearchHeaderProps> = (props) => {
  return (
    <S.Wrapper {...props}>
      <Image
        className="image"
        src="https://image.trevari.co.kr/static/UCM_banner@2x_pc.png"
      />
      <S.Container>
        <div className="reset_button">초기화</div>
        <DropDown
          className="dropdown"
          register={props.register}
          registerKey={"place"}
          optionList={PLACE_OPTION_LIST}
          style={{ width: "70px" }}
        />
        <DropDown
          className="dropdown"
          register={props.register}
          registerKey={"dayOfWeek"}
          optionList={DAY_OF_WEEK_OPTION_LIST}
          style={{ width: "70px" }}
        />
        <DropDown
          className="dropdown"
          register={props.register}
          registerKey={"category"}
          optionList={CATEGORY_OPTION_LIST}
        />
        <DropDown
          className="dropdown"
          register={props.register}
          registerKey={"interest"}
          optionList={INTEREST_OPTION_LIST}
        />
        <SearchInput
          className="search"
          placeholder="검색어를 입력하세요"
          type="search"
          register={props.register}
        />
      </S.Container>
    </S.Wrapper>
  );
};
