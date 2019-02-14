const isLogin = () => `{
  isLogin
}`;

const logout = () => `{
  logout
}`;

const login = (email, password) => `mutation {
  login(email: "${email}", password: "${password}") {
    email,
    nickname,
    balance {
      diamond,
      coin
    },
    friends {
      url,
      nickname,
      status
    },
    groups,
    notifications
  }
}`;

const signup = (email, password) => `mutation {
  signup(email: "${email}", password: "${password}") {
    email,
    nickname,
    balance {
      diamond,
      coin
    },
    friends {
      url,
      nickname,
      status
    },
    groups,
    notifications
  }
}`;

export default {
  isLogin,
  logout,
  login,
  signup,
};
