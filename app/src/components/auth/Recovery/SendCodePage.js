import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import validate from "../utils/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../utils/RenderInput";
import { Form } from "../utils/generalStyles";
import { AuthButton } from "../../../shared";

const Description = styled.span`
  font-size: 18px;
  text-align: center;
`;

const SendCodePage = props => {
  const { handleSubmit } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Description>
          Введите свою почту, чтобы мы отправили на вашу
          <br />
          почту код для восстановление пароля
        </Description>
        <Field
          name="email"
          type="text"
          component={RenderInput}
          placeholder="example@mail.com"
          label="Ввод почты"
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
})(SendCodePage);
