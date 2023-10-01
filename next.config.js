// @ts-check
const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: "@svgr/webpack",
    });

    config.resolve.alias["@"] = path.resolve(path.join(__dirname, "src"));
    return config;
  },
};

module.exports = nextConfig;
