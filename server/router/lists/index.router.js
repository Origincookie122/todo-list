module.exports = async(req, res, next) => {
    const pool = req.app.database;
    const [rows, fields] = await pool.query('SELECT * FROM todo_app_list');

    res.json(rows);

    next();
}