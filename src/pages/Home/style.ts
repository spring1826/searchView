import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-top: 40px;
  padding: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
    row-gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 8px;
    row-gap: 24px;
  }
`;
