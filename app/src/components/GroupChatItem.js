import React from "react";
import styled from "styled-components";

/* 
  Добавил padding-bot: 15px здесь, вместо блока с чатами, для того, чтобы компонент выглядел нормально, 
  когда у пользователя нет групповых чатов 
*/
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px 15px;
`;

const GroupAvatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: ${({ avatar }) =>
    avatar ? `url(${avatar}) no-repeat` : "#44464b"};
  background-size: cover;
  margin-bottom: 5px;
  cursor: pointer;
`;

const GroupChatItem = ({ avatar, label }) => (
  <Wrapper>
    <GroupAvatar avatar={avatar} />
    <span>{label}</span>
  </Wrapper>
);

export default GroupChatItem;
