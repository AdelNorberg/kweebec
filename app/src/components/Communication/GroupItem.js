import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;

  &:hover {
    ${Label} {
      color: #ccc;
    }
  }
`;
const GroupAvatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: ${({ avatar }) => `#44464b url(${avatar}) no-repeat`};
  background-size: cover;
  margin-bottom: 5px;
  cursor: pointer;
`;
const Label = styled.span`
  transition: all 0.6s ease;
  font-size: 12px;
  font-weight: bold;
`;

const GroupItem = ({ avatar, label }) => (
  <Wrapper>
    <GroupAvatar avatar={avatar} />
    <Label>{label}</Label>
  </Wrapper>
);

export default GroupItem;
