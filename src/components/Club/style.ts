import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 564px;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ecece9;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  background-color: green;
  overflow: hidden;
  position: relative;

  .deadline_imminent {
    position: absolute;
    top: 16px;
    left: 12px;
    background-color: #000;
    color: #fff;
    padding: 0.25rem 1rem;
    font-weight: bold;
    letter-spacing: -0.0625rem;
    font-size: 0.875rem;
    border-radius: 0.125rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 258px;

  .title {
    font-weight: bold;
    letter-spacing: -0.0625rem;
    font-size: 1.5rem;
    line-height: 1.9375rem;
    box-sizing: border-box;
    color: #000;
    margin: 0 0 0.5rem;
  }

  .leader {
    color: #000;
    margin: 0 0 0.5rem;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.0625rem;
    font-size: 1.125rem;
    line-height: 1.6875rem;
  }

  .description {
    color: #6e6e6c;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    visibility: visible;
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    letter-spacing: -0.0375rem;
    width: 100%;
  }
`;

export const PlaceContainer = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ecece9;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.0125rem;
  color: #6e6e6c;
  padding-left: 0.5rem;
`;
