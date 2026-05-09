module.exports = {
  apps: [
    {
      name: "gsmant_front",
      script: "cmd.exe",
      args: "/c npm run start",
      cwd: "C:/Web/GSMANT_FRONT",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
