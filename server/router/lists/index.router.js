module.exports = async(req, res, next) => {
    const pool = req.app.database;

    // NEED TO MAKE THIS SUPPORT MULTIPLE QUERY PARAMETERS

    if(req.query.id) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_list WHERE list_id = ?;`, [req.query.id]);
        res.json(rows);
        next();
        return
    }

    if(req.query.name) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_list WHERE list_name = ?;`, [req.query.name]);
        res.json(rows);
        next();
        return
    }

    // NEEDS MORE WORK WILL COME BACK TO.

    // if(req.query.updatedDate) {
    //     const [rows, fields] = await pool.query(`SELECT * FROM todo_app_list WHERE list_id = ?;`, [req.query.updatedDate]);
    //     res.json(rows);
    //     next();
    //     return
    // }

    // if(req.query.createdDate) {
    //     const [rows, fields] = await pool.query(`SELECT * FROM todo_app_list WHERE list_id = ?;`, [req.query.id]);
    //     res.json(rows);
    //     next();
    //     return
    // }

    
    const [rows, fields] = await pool.query('SELECT * FROM todo_app_list');

    res.json(rows);

    next();
}