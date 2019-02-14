import React from "react";
import styled from "styled-components";
import Loading from "../Resources/icons/loading.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(21, 22, 23, 0.7);
`;

export const renderLoading = () => (
  <Wrapper>
    <Loading />
  </Wrapper>
);
