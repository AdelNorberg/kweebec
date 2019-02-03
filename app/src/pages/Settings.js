import React from "react";
import styled from "styled-components";
import BlockWrapper from "../shared/Wrappers/BlockWrapper";
import LoggedUserInterface from "../hoc/LoggedUserInterface";
import Tabs from "../components/Tabs";

const Wrapper = styled(BlockWrapper)`
  height: 100%;
  overflow: hidden;
`;

class Settings extends React.Component {
  handleExitClick = () => {
    alert("Нажали выйти");
  };

  render() {
    return (
      <LoggedUserInterface>
        <Wrapper>
          <Tabs
            styles={{
              tabList: {
                background: "#2A2C30",
                flexBasis: "250px",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "40px",
              },
              tab: {
                defaultColor: "inherit",
                hoverColor: "#ccc",
                activeColor: "#ccc",
                dangerColor: "#EA4D42",
              },
              tabPanel: {
                background: "#2F3136",
                paddingTop: "100px",
                paddingLeft: "50px",
              },
            }}
          >
            <div label="Профиль">
              <div>Какой-то контент</div>
            </div>
            <div label="Голос">Что-то еще</div>
            <div label="Уведомления">А тут будут уведомления</div>
            <div label="Виджеты">А тут виджеты</div>
            <div label="Выйти" onClick={this.handleExitClick} danger />
          </Tabs>
        </Wrapper>
      </LoggedUserInterface>
    );
  }
}

export default Settings;
