const config = require("./config/config.json");
const routerHandler = require('./handler/routerLoader.js');
const app = require('express')();

const database = require('./database/database.js');
app.database = database;

routerHandler(app);

app.listen(config.Server.port, () => {
    console.log(`Server started on port ${config.Server.port}`);
});