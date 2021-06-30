const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    // GET route code here
});

//Post route to room table with an endpoint to check fo login
router.post('/', rejectUnauthenticated, (req, res) => {
    //Endpoint functionality
    if(req.isAuthenticated()) {
        console.log('is authenticated', req.isAuthenticated);
        console.log('user', req.user);
        console.log('req.body', req.body);
        //Adding room to "room" table in the database
        const queryText = `INSERT INTO "room" ("room_name", "description",
                            "upload", "user_id")
                            VALUES($1, $2, $3, $4)`;
                        
        pool.query(queryText, [req.body.name, req.body.description, req.body.upload, req.user.id])
            .then((result) =>{
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
