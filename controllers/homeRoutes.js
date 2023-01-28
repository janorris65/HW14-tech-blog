const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req,res) => {
    res.render('homepage')
})

router.get("/login", async (req,res)=> {
    res.render("login")
})


module.exports = router;