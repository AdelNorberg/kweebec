import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import SendCodePage from "./SendCodePage";
import EnterCodePage from "./EnterCodePage";
import ChangePasswordPage from "./ChangePasswordPage";

import ArrowBack from "../../../Resources/icons/arrowBack.svg";
import { AuthWrapper, BlockWrapper } from "../utils/generalStyles";
import { Logo } from "../../../shared";

const GoBack = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  font-size: 18px;
  transition: all 0.6s ease;
  color: ${props => props.theme.textSecondary};

  svg {
    margin-right: 7px;
    fill: ${props => props.theme.textSecondary};
    transition: all 0.6s ease;
  }

  &:hover {
    color: #fe9264;

    svg {
      fill: #fe9264;
    }
  }
`;

const NeedHelp = styled.a`
  position: absolute;
  right: 15px;
  bottom: 15px;

  font-size: 18px;
  transition: all 0.6s ease;
  color: ${props => props.theme.textSecondary};

  &:hover {
    color: #fe9264;
  }
`;

export default class Recovery extends React.Component {
  state = {
    page: 1,
  };

  nextPage = () => this.setState({ page: this.state.page + 1 });
  previousPage = () => this.setState({ page: this.state.page - 1 });

  onSubmit = formValues => {
    return formValues;
  };

  renderGoBack = () => {
    const Template = props => (
      <GoBack onClick={props.onClick}>
        <ArrowBack />
        Вернуться
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
    return (
      <AuthWrapper>
        <Fade>
          <BlockWrapper>
            {this.renderGoBack()}
            <Logo fontSize="36" gradient={true} />
            {this.renderSwitchPage()}
            <NeedHelp href="https://google.com" target="_blank">
              Нужна помощь?
            </NeedHelp>
          </BlockWrapper>
        </Fade>
      </AuthWrapper>
    );
  }
}
