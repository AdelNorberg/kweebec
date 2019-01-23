import React from "react";
import styled from "styled-components";

import { BlockWrapper } from "../shared";

import avatar from "../Resources/images/avatar.jpg";
import DiamondSM from "../Resources/icons/diamond-sm.svg";
import Coin from "../Resources/icons/coin.svg";

const Wrapper = styled(BlockWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 40px;
`;

const UserAvatar = styled.div`
  background: url(${avatar}) no-repeat;
  background-size: cover;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const UserName = styled.span`
  margin-top: 10px;
`;

const UserBalance = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 14px;
`;

const UserBalanceItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  svg {
    margin-right: 7px;
  }
`;

const UserProfile = () => (
  <Wrapper>
    <UserAvatar />
    <UserName>Frances Valuen</UserName>
    <UserBalance>
      <UserBalanceItem>
        <DiamondSM />
        65
      </UserBalanceItem>
      <UserBalanceItem>
        <Coin />
        225,079
      </UserBalanceItem>
    </UserBalance>
  </Wrapper>
);

export default UserProfile;
