import React from "react";
import styled from "styled-components";

import Diamond from "../../Resources/icons/diamond.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoName = styled.span`
  margin-left: 15px;
  color: ${({ fontColor }) => fontColor || "#f5673c"};
  font-family: ${({ theme }) => theme.fonts.CircularStd};
  font-size: ${({ fontSize }) => fontSize || "18"}px;
  font-weight: 900;
  ${({ gradient }) =>
    gradient
      ? `background: linear-gradient(to right, #f5673c, #f48d19);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;`
      : null}
`;

const Logo = props => {
  return (
    <Wrapper>
      <Diamond />
      <LogoName {...props}>Kweebec</LogoName>
    </Wrapper>
  );
};

export default Logo;
