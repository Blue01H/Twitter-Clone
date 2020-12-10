const router = require("express").Router();
const pool = require("../db");
const Authorization = require("../middleware/authorization");

router.get("/",Authorization, async (req, res) => {
    try {
        //This have the Payload
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user.id]);
        res.json(user.rows[0]);

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

module.exports = router;