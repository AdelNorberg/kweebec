import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 40px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  height: 53px;
  padding: 0 30px 0 30px;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  font-size: 24px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(258.4deg, #fe8a35 -8.84%, #df4747 99.48%);
  transition: all 0.6s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const AuthButton = props => {
  return <Button>{props.children}</Button>;
};

export default AuthButton;
