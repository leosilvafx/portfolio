const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/routes",
    createProxyMiddleware({
      target: "http://localhost:3080",
    })
  );
};
