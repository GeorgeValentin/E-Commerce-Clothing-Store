import styled from "styled-components";
import Button from "../button/button.component";

export const SignUpContainer = styled.div`
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

export const SignUpButton = styled(Button)`
  width: 65%;

  @media screen and (max-width: 550px) {
    width: 85%;
    margin: auto;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.6rem;
    width: 98%;
  }
`;
