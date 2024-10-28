module.exports = {
  apps: [
    {
      name: "automated-hydroponics",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
