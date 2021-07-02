const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');



//Gets all insurance data for user
router.get('/', rejectUnauthenticated, (req, res) => {

    if(req.isAuthenticated()){
    const queryText = `SELECT * FROM "insurance" WHERE "user_id" = $1;`;

    pool.query(queryText,[req.user.id])
        .then(result =>{
            res.send(result.rows);
            console.log('insurance data sent', result.rows);
        }).catch(err =>{
            console.log('Error insurance get', err);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

//Posts insurance data for user
router.post('/', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        console.log('req.body', req.body);
        console.log('user', req.user);
        

        const queryText = `INSERT INTO "insurance" ("user_id", "company",
                            "phone", "policy", "value", "file")
                            VALUES($1, $2, $3, $4, $5, $6)`;

        pool.query(queryText, [req.user.id, req.body.company, req.body.phone, req.body.policy, req.body.value, true])
            .then((results) =>{
                res.sendStatus(201);
            }).catch(err => {
                console.log('post error', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
