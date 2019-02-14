import isEmail from "validator/lib/isEmail";

const validate = ({ email, password, passwordAgain, code }) => {
  const errors = {};

  if (!email || !isEmail(email)) {
    errors.email = "Почта введена некорректно";
  }

  if (!password) {
    errors.password = "Пароль не введен";
  }

  if (!passwordAgain || password !== passwordAgain) {
    errors.passwordAgain = "Пароли не совпадают";
  }

  if (!code) {
    errors.code = "Введите код";
  }

  return errors;
};

export default validate;
