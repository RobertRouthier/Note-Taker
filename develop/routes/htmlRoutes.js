const path = require('path');
const router = require('express').Router();


// HTML GET Requests notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// HTML GET Requests index.html file
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;


