import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validate from "../../../helpers/auth/validate";

import Fade from "react-reveal/Fade";
import RenderInput from "../../../helpers/auth/RenderInput";
import { Form } from "../../../helpers/auth/generalStyles";
import AuthButton from "../../../helpers/auth/AuthButton";

const EnterCodePage = props => {
  const { handleSubmit, intl } = props;
  return (
    <Fade>
      <Form onSubmit={handleSubmit}>
        <Field
          name="code"
          type="text"
          component={RenderInput}
          placeholder="•••••••••••••"
          label={intl.formatMessage({
            id: "Auth.enterRecoveryCode",
            defaultMessage: "Введите код восстановления",
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
)(EnterCodePage);
