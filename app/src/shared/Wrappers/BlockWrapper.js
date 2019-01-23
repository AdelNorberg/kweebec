import styled from "styled-components";

const BlockWrapper = styled.div`
  background: ${props => props.theme.bgSecondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
`;

export default BlockWrapper;
