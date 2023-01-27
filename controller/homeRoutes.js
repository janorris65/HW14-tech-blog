const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/"), withAuth, async (req,res) => {
    res.render('homepage')
}