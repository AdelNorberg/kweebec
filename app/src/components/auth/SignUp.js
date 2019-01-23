import React from "react";
import { Field, reduxForm } from "redux-form";
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

class SignUp extends React.Component {
  onSubmit = formValues => {
    return formValues;
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
              <Field
                name="passwordAgain"
                type="password"
                component={RenderInput}
                placeholder="•••••••••••••"
                label="Повтор пароля"
              />
              <AuthButton>Регистрация</AuthButton>
            </Form>
            <AdditionalOptions>
              Есть аккаунт?
              <OrangeLink to="sign_in">Авторизуйся</OrangeLink>
            </AdditionalOptions>
          </BlockWrapper>
        </Fade>
      </AuthWrapper>
    );
  }
}

export default reduxForm({
  form: "signup",
  validate,
})(SignUp);
