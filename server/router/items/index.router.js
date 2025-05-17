module.exports = async (req, res, next) => {
    const pool = req.app.database;
    try {
        let query = "SELECT * FROM `todo_app_items`";
        const params = [];

        const conditions = [];
        if (req.query.id) {
            conditions.push("`item_id` = ?");
            params.push(req.query.id);
        }
        if (req.query.list_id) {
            conditions.push("`list_id` = ?");
            params.push(req.query.list_id);
        }
        if (conditions.length > 0) {
            query += " WHERE " + conditions.join(" AND ");
        }

        const [rows] = await pool.query(query, params);
        await res.json(rows);
    } catch (err) {
        next(err);
    }
};