import React from "react";
import styled from "styled-components";

// components
import UserProfile from "../components/UserProfile";
import Communication from "../components/Communication";
import TopNav from "../components/TopNav";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Position = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 40px;
`;

const Home = () => {
  return (
    <Container>
      <Position>
        <SideBar>
          <UserProfile />
          <Communication />
        </SideBar>
        <MainContainer>
          <TopNav />
        </MainContainer>
      </Position>
    </Container>
  );
};

export default Home;
