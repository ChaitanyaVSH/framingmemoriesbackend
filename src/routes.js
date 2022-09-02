const express = require("express");
const router = express.Router();
const getImages = require("./services/notionService")

router.get("/getImages", async (req, res) => {
    const data = await getImages()
    res.json(data);
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
