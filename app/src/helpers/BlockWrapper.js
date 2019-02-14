import styled from "styled-components";

export const BlockWrapper = styled.div`
  background: ${({ theme }) => theme.bgSecondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  position: relative;
  overflow: hidden;
`;
