import styled from "styled-components";
import { Link } from "react-router-dom";
import { BlockWrapper as MainBlockWrapper } from "../BlockWrapper";

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlockWrapper = styled(MainBlockWrapper)`
  background: ${({ theme }) => theme.bgThird};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px;
`;

export const Form = styled.form`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  div:first-child {
    margin-top: 0;
  }
`;

export const AdditionalOptions = styled.div`
  color: ${({ theme }) => theme.orangeColor};
  font-weight: 900;
  font-size: 16px;
  margin-top: 14px;
`;

export const OrangeLink = styled(Link)`
  color: ${({ theme }) => theme.orangeColor};
  display: inline-block
  border-bottom: 2px solid ${({ theme }) => theme.orangeColor};
  margin-left: 13px
  font-weight: 900;
  font-size: 16px;
`;

export const ErrorLabel = styled.div`
  margin-top: 30px;
  color: ${({ theme }) => theme.errorColor};
  font-weight: 900;
`;
