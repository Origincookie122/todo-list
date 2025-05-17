module.exports = async (req, res, next) => {
    const pool = req.app.database;
    try {
        let query = 'SELECT * FROM todo_app_items';
        const params = [];

        if (req.query.id && req.query.list_id) {
            query += ' WHERE item_id = ? AND list_id = ?';
            params.push(req.query.id, req.query.list_id);
        } else if (req.query.id) {
            query += ' WHERE item_id = ?';
            params.push(req.query.id);
        } else if (req.query.list_id) {
            query += ' WHERE list_id = ?';
            params.push(req.query.list_id);
        }

        const [rows] = await pool.query(query, params);
        res.json(rows);
    } catch (err) {
        next(err);
    }
};