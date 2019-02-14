import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import validate from "../../../helpers/auth/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../../../helpers/auth/RenderInput";
import { Form } from "../../../helpers/auth/generalStyles";
import AuthButton from "../../../helpers/auth/AuthButton";

const Description = styled.div`
  font-size: 18px;
  text-align: center;
`;

const SendCodePage = props => {
  const { handleSubmit, intl } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Description>
          <FormattedMessage
            id="Auth.sendCodeDescription"
            defaultMessage="Введите вашу электронную почту, мы отправим на нее код для восстановления пароля"
          />
        </Description>
        <Field
          name="email"
          type="text"
          component={RenderInput}
          placeholder="example@mail.com"
          label={intl.formatMessage({
            id: "Auth.emailLabel",
            defaultMessage: "Ввод почты",
          })}
        />
        <AuthButton>
          <FormattedMessage
            id="Auth.continueButton"
            defaultMessage="Продолжить"
          />
        </AuthButton>
      </Form>
    </Fade>
  );
};

export default compose(
  injectIntl,
  reduxForm({
    form: "recovery", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  })
)(SendCodePage);
