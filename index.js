import Express from "express";

const app = Express();
const port = 3000;

function middleware(req, res, next) {
  const { authkey } = req.headers;

  console.log(authkey);

  next();
}

app.get("/", middleware, (req, res, next) => {
  res.status(200).send("Hello");
});

app.listen(port, () => {
  console.log("server started");
});
