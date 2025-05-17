module.exports = async(req, res, next) => {
    const pool = req.app.database;

    // NEED TO MAKE THIS SUPPORT MULTIPLE QUERY PARAMETERS

    if(req.query.id) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_items WHERE item_id = ?;`, [req.query.id]);
        res.json(rows);
        next();
        return
    }

    const [rows, fields] = await pool.query('SELECT * FROM todo_app_items');

    res.json(rows);

    next();
}