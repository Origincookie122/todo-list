const fs = require('fs');
const path = require('path');

function loadRouters(app) {
    const routersPath = path.join(__dirname, '../', 'router');
    fs.readdirSync(routersPath, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            const routerFile = path.join(routersPath, dirent.name, 'index.router.js');
            if (fs.existsSync(routerFile)) {
                const router = require(routerFile);
                app.use(`/${dirent.name}`, router);
                console.log(`Loaded router: /${dirent.name}`);
            }
        }
    });
}

module.exports = loadRouters;