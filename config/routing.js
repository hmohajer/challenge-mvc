const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.get("/",controller.homepage);

router.get("/feed", controller.feed);

router.post("/addPost", controller.addPost);

router.get("/feed/:id", controller.showPost);

router.all("/feed/edit/:id", controller.editPost);

router.get("/feed/delete/:id", controller.deletePost);



module.exports = router;