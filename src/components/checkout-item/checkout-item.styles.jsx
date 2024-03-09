import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1050px) {
    width: 21%;
  }
`;

export const NameContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 1050px) {
    width: 21%;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
    font-weight: bold;
  }

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const QuantityContainer = styled.span`
  width: 23%;
  display: flex;

  @media screen and (max-width: 1050px) {
    width: 21%;
  }
`;

export const PriceContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 1050px) {
    width: 21%;
    padding-left: 21px;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
    padding-left: 12px;
  }
`;

export const ArrowContainer = styled.div`
  cursor: pointer;

  @media screen and (max-width: 1050px) {
    width: 21%;
  }
`;

export const ValueContainer = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 1050px) {
    width: 21%;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 1050px) {
    padding-left: 35px;
  }

  @media screen and (max-width: 650px) {
    padding-left: 40px;
  }
`;
