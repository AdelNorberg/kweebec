const authResolver = require("./auth");

const rootResolver = {
  ...authResolver
};

module.exports = rootResolver;
