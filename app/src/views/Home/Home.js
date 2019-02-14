import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// components
import { UserProfile } from "../../components/UserProfile";
import { Communication } from "../../components/Communication/";
import { TopNav } from "../../components/TopNav/";

// views
import { Settings } from "../Settings";
import { Quests } from "../Quests";
import { Privilege } from "../Privilege";
import { Rank } from "../Rank";
import { Loot } from "../Loot";

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

class Home extends Component {
  render() {
    const { email, balance, friends, groups } = this.props.userInfo;
    return (
      <Fade>
        <Container>
          <SideBar>
            <UserProfile email={email} balance={balance} />
            <Communication friends={friends} groups={groups} />
          </SideBar>
          <MainContainer>
            <TopNav />
            <Content>
              <Switch>
                <Route exact path="/home">
                  <Redirect to="/home/quests" />
                </Route>
                <Route exact path="/home/quests" component={Quests} />
                <Route exact path="/home/privilege" component={Privilege} />
                <Route exact path="/home/rank" component={Rank} />
                <Route exact path="/home/loot" component={Loot} />
                <Route exact path="/home/settings" component={Settings} />
              </Switch>
            </Content>
          </MainContainer>
        </Container>
      </Fade>
    );
  }
}

// Delete me!
import mockData from "../../mockData";
// Replace mockData to state.auth.userInfo
// eslint-disable-next-line
const mapStateToProps = state => ({
  userInfo: mockData,
});

export default connect(mapStateToProps)(Home);
