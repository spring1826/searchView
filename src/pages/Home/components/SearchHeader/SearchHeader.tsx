import React, { HTMLAttributes, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FILTER_OPTION_LIST } from "../../../../constants/HomeConstant";
import { Image } from "../../../../components/Image/Image";
import { SearchInput } from "../../../../components/Input/SearchInput/SearchInput";
import * as S from "./style";

interface SearchHeaderProps extends HTMLAttributes<HTMLDivElement> {
  register: UseFormRegister<any>;
  handleResetButton: () => void;
  handleSearchKeyword: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = (props) => {
  const [focusFilter, setFocusFilter] = useState<{
    title: string;
    options: string[];
  }>({ title: "", options: [] });

  const onclickDropdown = (filter: { title: string; options: string[] }) => {
    if (focusFilter.title === filter.title) {
      setFocusFilter({ title: "", options: [] });
    } else {
      setFocusFilter(filter);
    }
  };

  return (
    <S.Wrapper {...props}>
      <Image
        className="image"
        src="https://image.trevari.co.kr/static/UCM_banner@2x_pc.png"
      />
      <S.Container>
        <div className="reset_button" onClick={props.handleResetButton}>
          초기화
        </div>
        <S.DropdownContainer>
          {FILTER_OPTION_LIST.map((filter, idx) => {
            return (
              <div
                key={idx}
                className="dropdown"
                onClick={() => onclickDropdown(filter)}
              >
                {filter.title}
              </div>
            );
          })}
          {focusFilter.options.length > 0 && (
            <div className="option_container">
              {focusFilter.options.map((option, idx) => {
                return (
                  <div key={idx}>
                    <label>
                      <input type={"checkbox"} value={option} />
                      {option}
                    </label>
                  </div>
                );
              })}
              <div className="option-button_container">
                <div
                  className="cancle_button"
                  onClick={() => setFocusFilter({ title: "", options: [] })}
                >
                  취소
                </div>
                <div className="apply_button" onClick={() => {}}>
                  적용
                </div>
              </div>
            </div>
          )}
        </S.DropdownContainer>
        <SearchInput
          className="search"
          placeholder="검색어를 입력하세요"
          type="search"
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              props.handleSearchKeyword();
            }
          }}
          register={props.register}
        />
      </S.Container>
    </S.Wrapper>
  );
};
