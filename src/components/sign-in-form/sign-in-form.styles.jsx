import styled from "styled-components";
import Button from "../button/button.component";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 950px) {
    margin: auto;
    width: 75%;

    h2 {
      text-align: center;
    }

    span {
      text-align: center;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    justify-content: start;
    gap: 3rem;
    text-align: center;
    margin: auto !important;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 65%;
    gap: 1rem;
  }

  @media screen and (max-width: 550px) {
    width: 85%;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.7rem;
    width: 98%;
  }
`;

export const SignInFormButton = styled(Button)`
  @media screen and (max-width: 360px) {
    font-size: 0.6rem;
  }
`;
