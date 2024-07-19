const http = require("http");
// const { customer } = require("./routes");
const port = process.env.PORT ?? 1414;

const server = http.createServer((req, res) => {
  // if (req.url == "/customer") res.end(customer);

  res.end(
    JSON.stringify([
      {
        info: req.url,
      },
    ])
  );
});

server.listen(port, () => {
  console.log(`Server is Running: http://localhost:${port}`);
});
