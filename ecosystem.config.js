module.exports = {
  apps: [
    {
      name: "automated-hydroponics",
      script: "npm",
      args: "run dev:api",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
