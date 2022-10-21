var express = require('express');
var router = express.Router();

let database_path = "database.db"

const db = require('better-sqlite3')(database_path);

router.post('/', function(req, res, next) {
    let createdAt = new Date();
    db.prepare('INSERT INTO feedback(feedback_txt, created_at) values(?,?)')
        .run(req.body.feedback_txt, createdAt.toISOString());
    res.status(200).json({status:"ok"});
});

module.exports = router;
