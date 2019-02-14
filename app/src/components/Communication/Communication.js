import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BlockWrapper } from "../../helpers/BlockWrapper";
import { SearchInput } from "../SearchInput";
import FriendItem from "./FriendItem";
import GroupItem from "./GroupItem";

import InfoSVG from "../../Resources/icons/info.svg";
import ThemeSVG from "../../Resources/icons/theme.svg";
import SettingsSVG from "../../Resources/icons/settings.svg";

const Wrapper = styled(BlockWrapper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-size: 13px;
`;
const SearchInputWrapper = styled.div`
  padding: 22px 15px 0;
`;
const Label = styled.div`
  padding: 13px 0 13px 15px;
  font-size: 13px;
  font-weight: bold;
`;
const FriendsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const FriendsList = styled.div`
  flex: 1;
  overflow-y: auto;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25),
    inset 0px -1px 4px rgba(0, 0, 0, 0.25);
`;
const EmptyListLabel = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #44464b;
`;
const GroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const GroupList = styled.div`
  display: flex;
  justify-content: ${({ length }) =>
    length <= 3 ? "center" : "space-between"};
  overflow-x: auto;
  min-height: 100px;
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

class Communication extends Component {
  state = {
    filterFriends: "",
  };

  handleFilterFriendsChange = value => {
    this.setState({ filterFriends: value });
  };

  render() {
    const {
      props: { friends, groups },
      state: { filterFriends },
      handleFilterFriendsChange,
    } = this;
    return (
      <Wrapper>
        <FriendsWrapper>
          <SearchInputWrapper>
            <SearchInput
              onChange={handleFilterFriendsChange}
              value={filterFriends}
            />
          </SearchInputWrapper>
          <Label>
            <FormattedMessage
              id="Communication.friendsLabel"
              defaultMessage="Друзья"
            />
          </Label>
          <FriendsList>
            {friends.length ? (
              friends
                .filter(({ name }) =>
                  name.toLowerCase().includes(filterFriends.toLowerCase())
                )
                .map(friend => <FriendItem {...friend} key={friend.name} />)
            ) : (
              <EmptyListLabel>
                <FormattedMessage
                  id="Communication.friendsEmptyLabel"
                  defaultMessage="Добавьте друга"
                />
              </EmptyListLabel>
            )}
          </FriendsList>
        </FriendsWrapper>
        <GroupsWrapper>
          <Label>
            <FormattedMessage
              id="Communication.groupsLabel"
              defaultMessage="Групповые чаты"
            />
          </Label>
          <GroupList length={groups.length}>
            {groups.length ? (
              groups.map(group => <GroupItem {...group} key={group.label} />)
            ) : (
              <EmptyListLabel>
                <FormattedMessage
                  id="Communication.groupsEmptyLabel"
                  defaultMessage="Добавьте чат"
                />
              </EmptyListLabel>
            )}
          </GroupList>
        </GroupsWrapper>
        <AdditionalSettings>
          <InfoSVG />
          <ThemeSVG />
          <Link to="/home/settings">
            <SettingsSVG />
          </Link>
        </AdditionalSettings>
      </Wrapper>
    );
  }
}

export default Communication;
