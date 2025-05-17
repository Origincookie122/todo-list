const config = require("./config/config.json");
const routerHandler = require('./handler/routerLoader.js');
const app = require('express')();

routerHandler(app);

app.listen(config.Server.port, () => {
    console.log(`Server started on port ${config.Server.port}`);
});