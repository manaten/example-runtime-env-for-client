// @ts-check
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    emotionAlias: false,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  webpackFinal: async (config = {}) => {
    config.devtool = "inline-source-map";
    config.resolve.alias["@"] = path.resolve(path.join(__dirname, "../src"));
    config.module.rules = [
      ...config.module.rules.map((rule) =>
        rule.test && rule.test.test("a.svg")
          ? { ...rule, exclude: /\.svg$/ }
          : rule,
      ),
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: "@svgr/webpack",
      },
    ];
    return config;
  },
};
