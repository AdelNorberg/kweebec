import React from "react";
import { injectIntl } from "react-intl";
import { compose } from "redux";
import { connect } from "react-redux";
import { logout } from "../../actions";
import styled from "styled-components";
import { BlockWrapper } from "../../helpers/BlockWrapper";
import { Tabs } from "../../components/Tabs";

const Wrapper = styled(BlockWrapper)`
  height: 100%;
`;

class Settings extends React.Component {
  handleExitClick = () => {
    this.props.logout();
  };

  render() {
    const { intl } = this.props;
    return (
      <Wrapper>
        <Tabs
          customStyles={{
            tabList: {
              background: "#2A2C30",
              flexBasis: "250px",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "40px",
            },
            tab: {
              fontSize: "18px",
              fontWeight: "500",
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
          <div label={intl.formatMessage({ id: "Settings.profileTabLabel" })}>
            Какой-то контент
          </div>
          <div label={intl.formatMessage({ id: "Settings.voiceTabLabel" })}>
            Что-то еще
          </div>
          <div
            label={intl.formatMessage({ id: "Settings.notificationsTabLabel" })}
          >
            А тут будут уведомления
          </div>
          <div label={intl.formatMessage({ id: "Settings.widgetsTabLabel" })}>
            А тут виджеты
          </div>
          <div
            label={intl.formatMessage({ id: "Settings.exitTabLabel" })}
            onClick={this.handleExitClick}
            danger
          />
        </Tabs>
      </Wrapper>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    null,
    { logout }
  )
)(Settings);
