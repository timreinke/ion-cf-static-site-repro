/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "worker-links",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const MyValue = new sst.Linkable("MyValue", { properties: { x: 2 } });

    const MyWorker = new sst.cloudflare.Worker("MyWorker", {
      link: [MyValue],
      url: true,
      handler: "./packages/worker/index.ts",
    });

    // This clears out all resources from sst-env.d.ts
    // Comment, and resources and resources are generated properly
    const site = new sst.cloudflare.StaticSite("Site", {
      path: "packages/site",
    });

    return {};
  },
});
