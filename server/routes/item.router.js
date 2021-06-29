const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated,  (req, res) => {
  if(req.isAuthenticated()){
      console.log('is authenticated', req.isAuthenticated);
      console.log('user', req.user);
      console.log('req.body', req.body);

      const queryText = `INSERT INTO "items" ("name", "brand", 
                            "model", "upload", "user_id")
                            VALUES($1, $2, $3, $4, $5)`;

    

      
      
      
  }
});

module.exports = router;