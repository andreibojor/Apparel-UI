import styled from "styled-components";

type Props = {
  fullWidth?: boolean;
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  /*     box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%); */

  @media (min-width: 1440px) {
    max-width: ${({ fullWidth }: Props) => (fullWidth ? "100%;" : "1440px;")};
  }
`;
