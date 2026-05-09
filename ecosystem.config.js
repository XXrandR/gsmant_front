module.exports = {
  apps: [
    {
      name: "gsmant_front",
      script: "npm.cmd",
      args: "run start",
      cwd: "C:/Web/GSMANT_FRONT",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
