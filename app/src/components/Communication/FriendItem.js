import React, { Component } from "react";
import { FormattedMessage, defineMessages } from "react-intl";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 0;
  transition: all 0.6s ease;

  &:hover {
    background: ${({ theme }) => theme.bgThird};
    ${Name} {
      color: #ccc;
    }
  }
`;
const LeftBlock = styled.div`
  margin-left: 13px;
  margin-right: 15px;
  position: relative;
`;
const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${({ avatar }) => `#44464b url(${avatar}) no-repeat`};
  background-size: cover;
`;
const CircleStatus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
const RightBlock = styled.div`
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  margin-bottom: 3px;
`;
const LabelStatus = styled.span`
  color: ${({ color }) => color};
`;

class FriendItem extends Component {
  getStatusColor = status => {
    switch (status) {
      case 1:
        return "#2ed567";
      case 2:
        return "#28ACD6";
      case 3:
        return "#6D6D6D";
    }
  };

  messages = defineMessages({
    1: {
      id: "FriendItem.playingStatusLabel",
      defaultMessage: "в игре",
    },
    2: {
      id: "FriendItem.waitingStatusLabel",
      defaultMessage: "ожидает",
    },
    3: {
      id: "FriendItem.offlineStatusLabel",
      defaultMessage: "оффлайн",
    },
  });

  render() {
    const { name, avatar, status } = this.props;
    const color = this.getStatusColor(status);
    return (
      <Wrapper>
        <LeftBlock>
          <Avatar avatar={avatar} />
          <CircleStatus color={color} />
        </LeftBlock>
        <RightBlock>
          <Name>{name}</Name>
          <LabelStatus color={color}>
            <FormattedMessage {...this.messages[status]} />
          </LabelStatus>
        </RightBlock>
      </Wrapper>
    );
  }
}

export default FriendItem;
