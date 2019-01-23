import React from "react";
import styled from "styled-components";
import { BlockWrapper } from "../shared";
import TopNavItem from "./TopNavItem";

import Tasks from "../Resources/icons/tasks.svg";
import Crown from "../Resources/icons/crown.svg";
import Cup from "../Resources/icons/cup.svg";
import Box from "../Resources/icons/box.svg";
import Bell from "../Resources/icons/bell.svg";
import Chat from "../Resources/icons/chat.svg";

const Wrapper = styled(BlockWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const ItemsWrapper = styled.div`
  display: flex;

  & > div:first-child {
    border-radius: 7px 0 0 7px;
  }

  & > div:last-child {
    border-right: none;
  }
`;

const BtnWrapper = styled.div`
  padding: 0 18px;
  display: flex;
  align-items: center;
  background: #373b3f;
  border-radius: 14px;
  height: 47px;
  cursor: pointer;
  font-weight: 900;
`;

const Notifications = styled.div`
  display: flex;
  transition: all 0.6s ease;
  color: ${props => props.theme.textSecondary};

  svg {
    margin-right: 9px;
    fill: ${props => props.theme.textSecondary};
    transition: all 0.6s ease;

    &:last-child {
      margin-right: 30px;
    }

    &:hover {
      fill: #ccc;
    }
  }
`;

class TopNav extends React.Component {
  state = {
    items: [
      { svg: <Tasks />, label: "Мои задания" },
      { svg: <Crown />, label: "Привилегии" },
      { svg: <Cup />, label: "Рейтинг" },
      { svg: <Box />, label: "Сундуки" },
    ],
  };

  render() {
    return (
      <Wrapper>
        <ItemsWrapper>
          {this.state.items.map(item => (
            <TopNavItem {...item} key={item.label} />
          ))}
        </ItemsWrapper>
        <BtnWrapper>
          <Notifications>
            <Bell />
            <Chat />
          </Notifications>
          Выход
        </BtnWrapper>
      </Wrapper>
    );
  }
}

export default TopNav;
