import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validate from "../../../helpers/auth/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../../../helpers/auth/RenderInput";
import { Form } from "../../../helpers/auth/generalStyles";
import AuthButton from "../../../helpers/auth/AuthButton";

const ChangePasswordPage = props => {
  const { handleSubmit, pristine, submitting, intl } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Field
          name="password"
          type="password"
          component={RenderInput}
          placeholder="•••••••••••••"
          label={intl.formatMessage({
            id: "Auth.newPasswordLabel",
            defaultMessage: "Введите новый пароль",
          })}
        />
        <Field
          name="passwordAgain"
          type="password"
          component={RenderInput}
          placeholder="•••••••••••••"
          label={intl.formatMessage({
            id: "Auth.passwordRepeatLabel",
            defaultMessage: "Повтор пароля",
          })}
        />
        <AuthButton disabled={pristine || submitting}>
          <FormattedMessage id="Auth.saveButton" defaultMessage="Сохранить" />
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
)(ChangePasswordPage);
