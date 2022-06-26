import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .image {
    width: 340px;
    cursor: pointer;
    overflow: hidden;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .reset_button {
    margin-right: 6px;
    text-decoration: underline;
  }

  .dropdown {
    margin-right: 6px;
  }

  .search {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 16px;

    .reset_button,
    .dropdown {
      display: none;
    }

    .search {
      width: 100%;
      margin-left: 0;
    }
  }
`;
