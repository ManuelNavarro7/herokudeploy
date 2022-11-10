const express = require("express");
const app = express();

app.get("/mensaje", (req, res) => {
  res.send("Hola node js");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
server.on("error", (error) => {
  console.log(`Error on server ${error}`);
});
