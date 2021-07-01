const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


//Gets all data for insurance for user
router.get('/', rejectUnauthenticated, (req, res) => {

    const queryText = `SELECT * FROM "insurance" WHERE "user_id" = $1;`;

    pool.query(queryText,[req.user.id])
        .then(result =>{
            res.send(result.rows);
            console.log('insurance data sent');
        }).catch(err =>{
            console.log('Error insurance get', err);
            res.sendStatus(500);
        })
});
