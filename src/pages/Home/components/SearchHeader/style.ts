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
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .reset_button {
    margin-right: 6px;
    text-decoration: underline;
    cursor: pointer;
  }

  .search {
    width: 284px;
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

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0375rem;
  margin-left: 6px;
  color: rgb(0, 0, 0);
  cursor: pointer;

  .dropdown {
    height: 36px;
    padding: 6px 10px;
    color: #ff7900;
    background-color: #fff;
    border: 1px solid #ff8900;
    border-radius: 3px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    flex: none;
    margin-right: 6px;
    cursor: pointer;
  }

  .option_container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-shadow: rgb(0 0 0 / 16%) 0px 4px 10px;
    z-index: 2000;
  }

  .option-button_container {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .cancle_button {
    padding: 4px 12px;
    height: 30px;
    background: rgb(247, 247, 245);
    border-radius: 3px;
    text-align: center;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.0625rem;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: rgb(0, 0, 0);
    display: inline-block;
    cursor: pointer;
  }

  .apply_button {
    padding: 4px 12px;
    height: 30px;
    background: rgb(255, 121, 0);
    border-radius: 3px;
    text-align: center;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.0625rem;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: rgb(255, 255, 255);
    display: inline-block;
    margin-left: 7px;
    cursor: pointer;
  }
`;
