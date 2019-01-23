import isEmail from "validator/lib/isEmail";

const validate = ({ email, code, password, passwordAgain }) => {
  const errors = {};

  if (!email || !isEmail(email)) {
    errors.email = "Почта введена некорректно";
  }

  if (!code) {
    errors.code = "Введите код";
  }

  if (!password) {
    errors.password = "Пароль не введен";
  }

  if (!passwordAgain || password !== passwordAgain) {
    errors.passwordAgain = "Пароли не совпадают";
  }

  return errors;
};

export default validate;
