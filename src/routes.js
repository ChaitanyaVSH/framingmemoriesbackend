const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        hello: "hi!"
    });
});

router.get('/test',(req,res) => {
    res.json({
        hello: "test!"
    });

});

router.post('/testpost',(req,res) => {
    res.json({
        hello: "hit the POST!"
    });
});

module.exports = router;
