const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Get to get all from items table
router.get('/', rejectUnauthenticated, (req, res) => {
   
    if(req.isAuthenticated()){
        const queryText = `SELECT * FROM "items" WHERE "user_id" = $1`;

        pool.query(queryText, [req.user.id])
            .then(result => {
                res.send(result.rows);
                console.log('items data sent', result.rows);
            }).catch(err => {
                console.log('Error Item Get', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

//Post route to items table with an endpoint to check for login
router.post('/', rejectUnauthenticated, (req, res) => {
    //Endpoint functionality
    if (req.isAuthenticated()) {
        console.log('is authenticated', req.isAuthenticated);
        console.log('user', req.user);
        console.log('req.body', req.body);
        //Adding item to "items" table in the database
        const queryText = `INSERT INTO "items" ("name", "brand", 
                            "model", "upload", "user_id")
                            VALUES($1, $2, $3, $4, $5)`;

        pool.query(queryText, [req.body.name, req.body.brand, req.body.model, req.body.upload, req.user.id])
            .then((result) => {
                res.sendStatus(201);
            }).catch(err => {
                console.log('post error', err);
                res.sendStatus(500);
            });
    } else {
        //Send Forbidden if user isn't authenticated
        res.sendStatus(403);
    }
});

module.exports = router;