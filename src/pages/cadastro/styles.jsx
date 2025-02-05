import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    opacity: 0.8;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 388px;
  height: 308px;
  margin-top: 120px;

  line-height: 44px;
`;
export const TitleDir = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 368px;
  margin-top: 120px;

  margin-bottom: 20px;

  line-height: 44px;
`;
export const SubTitleDir = styled.p`
  margin-bottom: 35px;
  width: 368px;
  a {
    color: #23dd7a;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
  form {
    width: 275px;
    display: flex;
    flex-direction: column;
    Button {
      outline: 3px solid #e4105d;
      margin: 30px 0;
    }
  }
`;

export const Row = styled.div``;
