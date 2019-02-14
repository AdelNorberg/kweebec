import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Redirect, Link } from "react-router-dom";
import { signIn, clearErrorMessage } from "../../actions";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import validate from "../../helpers/auth/validate";

import { renderLoading } from "../../helpers/renderLoading";

import Fade from "react-reveal/Fade";
import Logo from "../../helpers/auth/Logo";
import AuthButton from "../../helpers/auth/AuthButton";

import {
  AuthWrapper,
  BlockWrapper,
  Form,
  AdditionalOptions,
  OrangeLink,
  ErrorLabel,
} from "../../helpers/auth/generalStyles";

import RenderInput from "../../helpers/auth/RenderInput";

const RecoveryLink = styled(Link)`
  font-size: 19px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 11px;

  &:hover {
    color: ${({ theme }) => theme.orangeColor};
  }
`;

class SignIn extends Component {
  state = {
    loading: false,
  };
  onSubmit = formValues => {
    this.setState({ loading: true });
    this.props.signIn({
      formValues,
      callback: () => this.setState({ loading: false }),
    });
  };

  componentDidMount() {
    this.props.clearErrorMessage();
  }

  render() {
    const {
      props: { intl, loggedIn, errorMessage, handleSubmit },
      state: { loading },
      onSubmit,
    } = this;

    return loggedIn ? (
      <Redirect to="/" />
    ) : (
      <AuthWrapper>
        <Fade>
          <BlockWrapper>
            {loading ? renderLoading() : null}
            <Logo fontSize="39" gradient={true} />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Field
                name="email"
                type="text"
                component={RenderInput}
                placeholder="example@mail.com"
                label={intl.formatMessage({ id: "Auth.emailLabel" })}
              />
              <Field
                name="password"
                type="password"
                component={RenderInput}
                placeholder="•••••••••••••"
                label={intl.formatMessage({ id: "Auth.passwordLabel" })}
              />
              <RecoveryLink to="/recovery">
                <FormattedMessage
                  id="Auth.forgotPasswordLink"
                  defaultMessage="Забыли пароль?"
                />
              </RecoveryLink>
              <AuthButton>
                <FormattedMessage
                  id="Auth.authButton"
                  defaultMessage="Авторизоваться"
                />
              </AuthButton>
            </Form>
            <AdditionalOptions>
              <FormattedMessage
                id="Auth.haventAccount"
                defaultMessage="Нет аккаунта?"
              />
              <OrangeLink to="/sign_up">
                <FormattedMessage
                  id="Auth.registrationLink"
                  defaultMessage="Создай его"
                />
              </OrangeLink>
            </AdditionalOptions>
            {errorMessage ? <ErrorLabel>{errorMessage}</ErrorLabel> : null}
          </BlockWrapper>
        </Fade>
      </AuthWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  errorMessage: state.auth.errorMessage,
});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    { signIn, clearErrorMessage }
  ),
  reduxForm({
    form: "signin",
    validate,
  })
)(SignIn);
