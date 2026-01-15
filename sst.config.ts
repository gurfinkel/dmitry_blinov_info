/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "dmitry-blinov-portfolio",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("Portfolio", {
      domain: {
        name: "dmitryblinov.dev",
        dns: sst.aws.dns({ zone: "dmitryblinov.dev" }),
      },
    });
  },
});
