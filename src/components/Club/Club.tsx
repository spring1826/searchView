import React, { HTMLAttributes } from "react";
import { ClubType } from "../../types/ClubType";
import { Image } from "../Image/Image";
import * as S from "./style";

interface ClubProps extends HTMLAttributes<HTMLDivElement> {
  data: ClubType;
  onClick: () => void;
}

export const Club: React.FC<ClubProps> = (props) => {
  return (
    <S.Wrapper onClick={props.onClick}>
      <S.ImageContainer>
        <Image src={props.data.club.coverUrl} />
        <div className="deadline_imminent">마감임박</div>
      </S.ImageContainer>
      <S.ContentContainer>
        <S.TitleContainer>
          <div className="title">{props.data.club.name}</div>
          <div className="leader">{`${props.data.leaders[0].name} 님`}</div>
          <div className="description">{props.data.club.description}</div>
        </S.TitleContainer>
        <S.PlaceContainer>
          <div>{`${props.data.club.place} | ${props.data.club.meetings[0].startedAt}`}</div>
        </S.PlaceContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
