const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req,res) => {
    res.render('homepage')
    // contains all blog posts
})

router.get("/blogpost/:id", async (req,res)=> {
    res.render("blogpost")
    // render clicked blogpost, option to leave comment
})

router.get("/login", async (req,res)=> {
    res.render("login")
    // sign in or sign up (leads to /signup)
})

router.get("/signup", async (req,res)=> {
    res.render("signup")
    // sign up (from login)
})

router.get("/dashboard", withAuth, async (req,res)=> {
    res.render("dashboard")
    //contains my blog posts and options to add new (title and content),return to dashboard
})

module.exports = router;