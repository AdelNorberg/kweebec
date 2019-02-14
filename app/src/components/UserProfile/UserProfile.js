import React from "react";
import styled from "styled-components";

import { BlockWrapper } from "../../helpers/BlockWrapper";

import avatar from "../../Resources/images/avatar.jpg";
import DiamondSmSVG from "../../Resources/icons/diamond-sm.svg";
import CoinSVG from "../../Resources/icons/coin.svg";

const Wrapper = styled(BlockWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;
const UserAvatar = styled.div`
  background: #44464b url(${avatar}) no-repeat;
  background-size: cover;
  height: 132px;
  width: 132px;
  border-radius: 50%;
`;
const UserName = styled.span`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;
const UserBalance = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.CircularStd};
  font-weight: 700;

  & > * {
    margin-right: 30px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;
const UserBalanceItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 7px;
  }
`;

const UserProfile = ({ email, balance: { diamond, coin } }) => {
  return (
    <Wrapper>
      <UserAvatar />
      <UserName>{email}</UserName>
      <UserBalance>
        <UserBalanceItem>
          <DiamondSmSVG />
          {diamond}
        </UserBalanceItem>
        <UserBalanceItem>
          <CoinSVG />
          {coin}
        </UserBalanceItem>
      </UserBalance>
    </Wrapper>
  );
};

export default UserProfile;
