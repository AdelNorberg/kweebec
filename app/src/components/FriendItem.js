import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 0;
`;
const LeftBlock = styled.div`
  margin-right: 15px;
  position: relative;
`;
const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${({ avatar }) =>
    avatar ? `url(${avatar}) no-repeat` : "#44464b"};
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
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  margin-bottom: 3px;
`;
const LabelStatus = styled.span`
  color: ${({ color }) => color};
`;

class FriendItem extends React.Component {
  getStatusSettings = status => {
    switch (status) {
      case 1:
        return { color: "#2ed567", label: "в игре" };
      case 2:
        return { color: "#28ACD6", label: "ожидает" };
      case 3:
        return { color: "#6D6D6D", label: "оффлайн" };
    }
  };

  render() {
    const { name, avatar, status } = this.props;
    const { color, label } = this.getStatusSettings(status);
    return (
      <Wrapper>
        <LeftBlock>
          <Avatar avatar={avatar} />
          <CircleStatus color={color} />
        </LeftBlock>
        <RightBlock>
          <Name>{name}</Name>
          <LabelStatus color={color}>{label}</LabelStatus>
        </RightBlock>
      </Wrapper>
    );
  }
}

export default FriendItem;
