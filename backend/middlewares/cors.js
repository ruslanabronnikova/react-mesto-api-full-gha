const allowedCors = [
  "https://bronnikovarsmesto.nomoreparties.co",
  "http://bronnikovarsmesto.nomoreparties.co",
  "https://api.bronnokovarsmesto.nomoreparties.co",
  "http://api.bronnokovarsmesto.nomoreparties.co",
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:3001",
  "https://localhost:3001",
];

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

const CorsMiddleware = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  const requestHeaders = req.headers["access-control-request-headers"];

  if (method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);

    res.header("Access-Control-Allow-Headers", requestHeaders);

    return res.end();
  }

  return next();
};

module.exports = { CorsMiddleware };