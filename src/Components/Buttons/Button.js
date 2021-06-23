import styled, { css } from "styled-components";

const Button = styled.header`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(theme) => theme.grey};
  background: hsl(49, 100%, 58%);
  border: 2px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  :hover {
    background-color: white;
  }
  display: block;
  ${({ search }) =>
    search &&
    css`
      padding: 15px 30px;
    `};
`;

export default Button;
