import React from "react";
import styled from "styled-components";

// components
import UserProfile from "../components/UserProfile";
import Communication from "../components/Communication/";
import TopNav from "../components/TopNav/";

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 97%;
  padding: 15px 0;
  display: flex;
`;
const SideBar = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
`;
const MainContainer = styled.div`
  flex: 1;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  margin-top: 30px;
  flex: 1;
`;

class LoggedUserInterface extends React.Component {
  render() {
    return (
      <Container>
        <SideBar>
          <UserProfile />
          <Communication />
        </SideBar>
        <MainContainer>
          <TopNav />
          <Content>{this.props.children}</Content>
        </MainContainer>
      </Container>
    );
  }
}

export default LoggedUserInterface;
