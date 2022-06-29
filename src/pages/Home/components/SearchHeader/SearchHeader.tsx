import React, { HTMLAttributes, useContext, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FILTER_OPTION_LIST } from "../../../../constants/HomeConstant";
import { Image } from "../../../../components/Image/Image";
import { SearchInput } from "../../../../components/Input/SearchInput/SearchInput";
import * as S from "./style";
import { FilterContext } from "../../../../contexts/filterContext";
import { useNavigate } from "react-router-dom";
import { useSearchUrl } from "../../../../hooks/useSearchUrl";

interface SearchHeaderProps extends HTMLAttributes<HTMLDivElement> {
  register: UseFormRegister<any>;
  handleResetButton: () => void;
  handleSearchKeyword: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = (props) => {
  const navigate = useNavigate();
  const filterContext = useContext(FilterContext);
  const [options, setOptions] = useState<string[]>([]);

  const [focusFilter, setFocusFilter] = useState<{
    key: string;
    title: string;
    options: string[];
  }>({ key: "", title: "", options: [] });

  const onclickDropdown = (filter: {
    key: string;
    title: string;
    options: string[];
  }) => {
    if (focusFilter.title === filter.title) {
      setFocusFilter({ key: "", title: "", options: [] });
    } else {
      setFocusFilter(filter);
    }
    setOptions([]);
  };

  // filter context 저장
  const setFilterOption = () => {
    if (focusFilter.title === "장소") {
      filterContext.placeFilter = options;
    }
    if (focusFilter.title === "요일") {
      filterContext.dayFilter = options;
    }
    if (focusFilter.title === "클럽유형") {
      filterContext.typeFilter = options;
    }
    if (focusFilter.title === "관심분야") {
      filterContext.categoryFilter = options;
    }
    navigate(`/${useSearchUrl(filterContext)}`);
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
                const isCheckedList: string[] = filterContext[focusFilter.key];
                return (
                  <div key={idx}>
                    <label>
                      <input
                        type={"checkbox"}
                        value={option}
                        defaultChecked={isCheckedList.includes(option)}
                        onClick={(e) => {
                          const value = e.currentTarget.value;

                          if (options.indexOf(value) >= 0) {
                            setOptions(
                              options.filter(
                                (option, index) =>
                                  index !== options.indexOf(value)
                              )
                            );
                          } else {
                            setOptions([...options, value]);
                          }
                        }}
                      />
                      {option}
                    </label>
                  </div>
                );
              })}
              <div className="option-button_container">
                <div
                  className="cancle_button"
                  onClick={() =>
                    setFocusFilter({ key: "", title: "", options: [] })
                  }
                >
                  취소
                </div>
                <div className="apply_button" onClick={setFilterOption}>
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
