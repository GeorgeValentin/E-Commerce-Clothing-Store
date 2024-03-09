import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1050px) {
    width: 75%;
  }

  @media screen and (max-width: 650px) {
    width: 94%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 1050px) {
    width: 22%;
    gap: 0;

    &:last-child {
      width: 12%;
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 0.75rem;
    width: 21.5%;

    &:last-child {
      width: 14%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 550px) {
    font-size: 1.75rem;
    font-weight: bold;
  }
`;
