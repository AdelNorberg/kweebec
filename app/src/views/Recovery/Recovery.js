import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import SendCodePage from "./steps/SendCodePage";
import EnterCodePage from "./steps/EnterCodePage";
import ChangePasswordPage from "./steps/ChangePasswordPage";

import ArrowBack from "../../Resources/icons/arrowBack.svg";
import { AuthWrapper, BlockWrapper } from "../../helpers/auth/generalStyles";
import Logo from "../../helpers/auth/Logo";

const GoBack = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  font-size: 18px;
  transition: all 0.6s ease;
  color: ${({ theme }) => theme.textSecondary};

  svg {
    margin-right: 7px;
    fill: ${({ theme }) => theme.textSecondary};
    transition: all 0.6s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.orangeColor};

    svg {
      fill: ${({ theme }) => theme.orangeColor};
    }
  }
`;

const NeedHelp = styled.a`
  position: absolute;
  right: 15px;
  bottom: 15px;

  font-size: 18px;
  transition: all 0.6s ease;

  &:hover {
    color: ${({ theme }) => theme.orangeColor};
  }
`;

class Recovery extends Component {
  state = {
    page: 1,
  };

  nextPage = () => this.setState({ page: this.state.page + 1 });
  previousPage = () => this.setState({ page: this.state.page - 1 });

  onSubmit = formValues => {
    return formValues;
  };

  renderGoBack = () => {
    const Template = ({ onClick }) => (
      <GoBack onClick={onClick}>
        <ArrowBack />
        <FormattedMessage id="Auth.goBackLink" defaultMessage="Вернуться" />
      </GoBack>
    );

    switch (this.state.page) {
      case 1:
        return (
          <Link to="sign_in">
            <Template />
          </Link>
        );
      case 3:
        return null;
      default:
        return <Template onClick={this.previousPage} />;
    }
  };

  renderSwitchPage = () => {
    switch (this.state.page) {
      case 2:
        return (
          <EnterCodePage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        );
      case 3:
        return (
          <ChangePasswordPage
            previousPage={this.previousPage}
            onSubmit={this.onSubmit}
          />
        );

      default:
        return <SendCodePage onSubmit={this.nextPage} />;
    }
  };

  render() {
    const {
      props: { loggedIn },
      renderGoBack,
      renderSwitchPage,
    } = this;

    return loggedIn ? (
      <Redirect to="/" />
    ) : (
      <AuthWrapper>
        <Fade>
          <BlockWrapper>
            {renderGoBack()}
            <Logo fontSize="36" gradient={true} />
            {renderSwitchPage()}
            <NeedHelp href="https://google.com" target="_blank">
              <FormattedMessage
                id="Auth.needHelpLink"
                defaultMessage="Нужна помощь?"
              />
            </NeedHelp>
          </BlockWrapper>
        </Fade>
      </AuthWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

export default compose(
  injectIntl,
  connect(mapStateToProps)
)(Recovery);
