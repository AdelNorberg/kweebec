import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../utils/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../utils/RenderInput";
import { Form } from "../utils/generalStyles";
import { AuthButton } from "../../../shared";

const EnterCodePage = props => {
  const { handleSubmit } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Field
          name="code"
          type="text"
          component={RenderInput}
          placeholder="•••••••••••••"
          label="Введите код восстановления"
        />
        <AuthButton>Продолжить</AuthButton>
      </Form>
    </Fade>
  );
};

export default reduxForm({
  form: "recovery", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(EnterCodePage);
