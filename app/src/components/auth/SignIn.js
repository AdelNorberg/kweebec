import React from "react";
import * as actions from "../../actions";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import validate from "./utils/validate";

import Fade from "react-reveal/Fade";
import { Logo, AuthButton } from "../../shared";

import {
  AuthWrapper,
  BlockWrapper,
  Form,
  AdditionalOptions,
  OrangeLink,
} from "./utils/generalStyles";

import RenderInput from "./utils/RenderInput";

const RecoveryLink = styled(Link)`
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 11px;

  &:hover {
    color: #fe9264;
  }
`;

class SignIn extends React.Component {
  onSubmit = formValues => {
    this.props.signin(formValues);
  };

  render() {
    return (
      <AuthWrapper>
        <Fade>
          <BlockWrapper>
            <Logo fontSize="36" gradient={true} />
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="email"
                type="text"
                component={RenderInput}
                placeholder="example@mail.com"
                label="Ввод почты"
              />
              <Field
                name="password"
                type="password"
                component={RenderInput}
                placeholder="•••••••••••••"
                label="Пароль"
              />
              <RecoveryLink to="recovery">Забыли пароль?</RecoveryLink>
              <AuthButton>Авторизоваться</AuthButton>
            </Form>
            <AdditionalOptions>
              Нет аккаунта?
              <OrangeLink to="sign_up">Создай его</OrangeLink>
            </AdditionalOptions>
          </BlockWrapper>
        </Fade>
      </AuthWrapper>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({
    form: "signin",
    validate,
  })
)(SignIn);
