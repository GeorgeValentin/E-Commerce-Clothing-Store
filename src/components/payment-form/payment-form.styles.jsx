import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: 350px;
  }

  @media screen and (max-width: 400px) {
    min-width: 275px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const PaymentFormTitle = styled.div`
  @media screen and (max-width: 800px) {
    font-weight: bold;
    margin: auto auto 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 50%;
    font-size: 1rem;
  }
`;
