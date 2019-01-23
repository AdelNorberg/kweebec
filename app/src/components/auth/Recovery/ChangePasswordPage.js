import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../utils/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../utils/RenderInput";
import { Form } from "../utils/generalStyles";
import { AuthButton } from "../../../shared";

const ChangePasswordPage = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Field
          name="password"
          type="password"
          component={RenderInput}
          placeholder="•••••••••••••"
          label="Введите новый пароль"
        />
        <Field
          name="passwordAgain"
          type="password"
          component={RenderInput}
          placeholder="•••••••••••••"
          label="Повтор пароля"
        />
        <AuthButton disabled={pristine || submitting}>Сохранить</AuthButton>
      </Form>
    </Fade>
  );
};

export default reduxForm({
  form: "recovery", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ChangePasswordPage);
