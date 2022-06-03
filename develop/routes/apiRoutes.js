const router = require('express').Router();
const fs = require('fs');
const { Module } = require('module');
const path = require('path');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})


router.post('/notes', (req, res) => {

    const currentSaves = fs.readFileSync(path.join(process.cwd(), '/db/db.json'), 'utf8');

    const newNote = [...currentSaves, {id: uuid(), title: req.body.title, text: req.body.text}];

    fs.writeFileSync(path.join(process.cwd(), '/db/db.json'), newNote);

    console.log(req.body);
    res.json(true);
});

 module.exports = router;