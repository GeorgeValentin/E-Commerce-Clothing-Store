import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 30px auto;
  gap: 5rem;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
