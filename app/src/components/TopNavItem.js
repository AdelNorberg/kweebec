import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 20px 21px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.6s ease;
  border-right: 2px solid #2a2c30;

  &:hover {
    color: #ccc;
    background: linear-gradient(to bottom, #36393f, #2f3136);
  }
`;

const Label = styled.span`
  margin-left: 11px;
`;

const TopNavItem = ({ svg, label }) => {
  return (
    <Item>
      {svg}
      <Label>{label}</Label>
    </Item>
  );
};

export default TopNavItem;
