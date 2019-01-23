import styled from "styled-components";
import { Link } from "react-router-dom";
import { BlockWrapper as MainBlockWrapper } from "../../../shared";

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlockWrapper = styled(MainBlockWrapper)`
  background: #2a2c30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  div:first-child {
    margin-top: 0;
  }
`;

export const AdditionalOptions = styled.div`
  color: #fe9264;
  font-weight: 900;
  font-size: 16px;
  margin-top: 14px;
`;

export const OrangeLink = styled(Link)`
  color: #FE9264
  display: inline-block
  border-bottom: 2px solid #FE9264
  margin-left: 13px
  font-weight: 900;
  font-size: 16px;
`;
