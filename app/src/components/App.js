import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { isLogin, selectLanguage } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../routes";
import { GlobalStyle } from "../themes";

import { renderLoading } from "../helpers/renderLoading";

// react-intl
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import messages_en from "../translations/en.json";
import messages_ru from "../translations/ru.json";

addLocaleData([...en, ...ru]);

const messages = {
  en: messages_en,
  ru: messages_ru,
};

const userLanguage = (
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
).split(/[-_]/)[0]; // userLanguage without region code;

class App extends Component {
  componentDidMount() {
    const {
      isLogin,
      selectLanguage,
      config: { languages, selectedLanguage },
    } = this.props;

    isLogin();

    if (languages.includes(userLanguage) && selectedLanguage !== userLanguage) {
      selectLanguage(userLanguage);
    }
  }

  render() {
    const { config, loggedIn } = this.props;

    return (
      <IntlProvider
        locale={config.selectedLanguage}
        messages={messages[config.selectedLanguage]}
      >
        <React.Fragment>
          {loggedIn === null ? (
            renderLoading()
          ) : (
            <Router>
              <Routes />
            </Router>
          )}
          <GlobalStyle />
        </React.Fragment>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  config: state.config,
});

export default connect(
  mapStateToProps,
  { isLogin, selectLanguage }
)(App);
