import styled from "styled-components";

export const SignInButton = styled.button`
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  background-color: #fff8ea;
  color: #829460;
  display: block;
  font-weight: bold;
  transition: 1s all;

  ${props => props.disabled === false &&`
    &:hover {
      background-color: #FFF;
      color: #f6f6f6
    }
  `}


  ${props => props.disabled &&`
  opacity: 0.7
  `}
`;
