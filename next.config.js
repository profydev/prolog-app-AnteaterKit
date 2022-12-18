/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
};

module.exports = nextConfig;
