module.exports = async (req, res, next) => {
    const pool = req.app.database;

    let query = "SELECT * FROM todo_app_list";
    const conditions = [];
    const params = [];

    try {
        if (req.query.id) {
            conditions.push("`list_id` = ?");
            params.push(req.query.id);
        }

        if (req.query.name) {
            conditions.push("`list_name` = ?");
            params.push(req.query.name);
        }

        // NEED TO ADD A FILTER BY CREATED DATE OR UPDATE

        if (conditions.length > 0) {
            query += " WHERE " + conditions.join(" AND ");
        }

        const [rows] = await pool.query(query, params);

        res.json(rows);
    } catch (err) {
        next(err);
    }
};