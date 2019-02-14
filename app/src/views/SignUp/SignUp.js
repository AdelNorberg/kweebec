import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Redirect } from "react-router-dom";
import { signUp, clearErrorMessage } from "../../actions";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
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

class SignUp extends Component {
  state = {
    loading: false,
  };
  onSubmit = formValues => {
    this.setState({ loading: true });
    this.props.signUp({
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
            <Logo fontSize="36" gradient={true} />
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
              <Field
                name="passwordAgain"
                type="password"
                component={RenderInput}
                placeholder="•••••••••••••"
                label={intl.formatMessage({ id: "Auth.passwordRepeatLabel" })}
              />
              <AuthButton>
                <FormattedMessage
                  id="Auth.registrationButton"
                  defaultMessage="Регистрация"
                />
              </AuthButton>
            </Form>
            <AdditionalOptions>
              <FormattedMessage
                id="Auth.haveAccount"
                defaultMessage="Есть аккаунт?"
              />
              <OrangeLink to="/sign_in">
                <FormattedMessage
                  id="Auth.loginLink"
                  defaultMessage="Авторизуйся"
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
    { signUp, clearErrorMessage }
  ),
  reduxForm({
    form: "signup",
    validate,
  })
)(SignUp);
