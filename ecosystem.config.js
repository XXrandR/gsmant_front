module.exports = {
  apps: [
    {
      name: "gsmant_front",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "C:/Web/GSMANT_FRONT",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
