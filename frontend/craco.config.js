const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@": "./src",
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#24bbed" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  jest: {
    moduleNameMapper: {
      "^@/(.+)": "<rootDir>/src/$1",
    },
  },
};
