module.exports = async(req, res, next) => {
    const pool = req.app.database;

    // THIS IS AN IDIOTIC WAY OF DOING THIS.... NEEDS REFACTORING

    if(req.query.list_id && req.query.id) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_items WHERE item_id = ? AND list_id = ?;`, [req.query.id, req.query.list_id]);
        res.json(rows);
        next();
        return
    } else if(req.query.id) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_items WHERE item_id = ?;`, [req.query.id]);
        res.json(rows);
        next();
        return
    } else if(req.query.list_id) {
        const [rows, fields] = await pool.query(`SELECT * FROM todo_app_items WHERE list_id = ?;`, [req.query.list_id]);
        res.json(rows);
        next();
        return
    }

    const [rows, fields] = await pool.query('SELECT * FROM todo_app_items');

    res.json(rows);

    next();
}