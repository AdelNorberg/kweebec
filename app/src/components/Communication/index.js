import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlockWrapper } from "../../shared";
import FriendItem from "./FriendItem";
import GroupChatItem from "./GroupChatItem";

import Info from "../../Resources/icons/info.svg";
import Settings from "../../Resources/icons/settings.svg";

const Wrapper = styled(BlockWrapper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-size: 13px;
  overflow: hidden;
`;
const Label = styled.div`
  padding: 13px 0 13px 15px;
`;
const FriendsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
// Media 1366x768 - max-height: 216px
const FriendsList = styled.div`
  flex: 1;
  max-height: 385px;
  overflow-y: auto;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
`;
const GroupsWrapper = styled.div`
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
`;
const GroupList = styled.div`
  display: flex;
  justify-content: ${({ length }) =>
    length <= 3 ? "center" : "space-between"};
  overflow-x: auto;
`;
const AdditionalSettings = styled.div`
  background: ${({ theme }) => theme.bgThird};
  display: flex;
  justify-content: center;
  padding: 19px 0;

  & > * {
    margin-right: 15px;
  }

  & > *:last-child {
    margin-right: 0px;
  }

  svg {
    fill: ${({ theme }) => theme.textSecondary};
    transition: all 0.6s ease;
    cursor: pointer;

    &:hover {
      fill: #ccc;
    }
  }
`;

const Communication = () => (
  <Wrapper>
    <FriendsWrapper>
      <Label>Друзья</Label>
      <FriendsList>
        {mockData.friends.map(friend => (
          <FriendItem {...friend} key={friend.name} />
        ))}
      </FriendsList>
    </FriendsWrapper>
    <GroupsWrapper>
      <Label>Групповые чаты</Label>
      <GroupList length={mockData.groups.length}>
        {mockData.groups.map(chat => (
          <GroupChatItem {...chat} key={chat.label} />
        ))}
      </GroupList>
    </GroupsWrapper>
    <AdditionalSettings>
      <Info />
      <Link to="/settings">
        <Settings />
      </Link>
    </AdditionalSettings>
  </Wrapper>
);

export default Communication;

// Mock data, delete me!
import avatar from "../../Resources/images/avatar.jpg";
const mockData = {
  friends: [
    { name: "AdelNorberg", status: 1, avatar },
    { name: "Revival WTF", status: 1, avatar },
    { name: "V2tkaBad", status: 1 },
    { name: "Almir", status: 2 },
    { name: "DikiyKoshak", status: 3 },
    { name: "NonamePlayer", status: 3 },
    { name: "Terminator", status: 3 },
    { name: "AssasinKerosin", status: 3 },
    { name: "AnotherOneDude", status: 3 },
    { name: "WhoAreYou", status: 3 },
    { name: "TimeToThink", status: 3 },
    { name: "LetsGo", status: 3 },
    { name: "321", status: 3 },
    { name: "123", status: 3 },
  ],
  groups: [
    { label: "chatick", avatar },
    { label: "grouplnc" },
    { label: "Lsdcomp" },
  ],
};
