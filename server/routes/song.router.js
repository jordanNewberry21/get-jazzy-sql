const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// static content. this will be replaced with a database table
// const songListArray = [
//     {
//         title: 'Take Five',
//         length: '2:55',
//         date_released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         date_released: '1959-08-17'
//     }
// ];

router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM songs ORDER BY title;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('Got back songs');
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error from db:', error);
        res.sendStatus(500);
    });
    
});

router.post('/', (req, res) => {
    let song = req.body;
    let sqlText = `INSERT INTO songs (title, length, date_released, album)
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [song.title, song.length, song.date_released, song.album])
        .then((response) => {
            console.log('received new song');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error from db:', error);
            res.sendStatus(500);
        });
    
});

module.exports = router;