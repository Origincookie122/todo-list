const config = require("./config/config.json");

const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.Server.port, () => {
    console.log(`Server started on port ${config.Server.port}`);
});