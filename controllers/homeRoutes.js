const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req,res) => {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs, "hey!!!!");
    res.render('homepage',{ blogs,
        loggedIn: req.session.logged_in
      });
    // contains all blog posts, needs creator names, and click access to update
})

router.get("/blogpost/", async (req,res)=> {
    // res.render("blogpost")
    // const userblogData = await Blog.findAll({
    //     where: {
    //         Userid: 
    //     }
    // })
    // render clicked blogpost, option to leave comment
})

router.get("/login", async (req,res)=> {
    res.render("login") 
    // sign in, still need sign up (leads to /signup) done 
})

router.get("/signup", async (req,res)=> {
    res.render("signup")
    // sign up (from login), done 
})

router.get("/dashboard", withAuth, async (req,res)=> {
    const usernameData= await User.findByPk(req.session.user_id);
    const username = usernameData.get({ plain: true });

    const userblogData = await Blog.findAll({
        where: {
            user_id: req.session.user_id
        }
    });
    const userblogs = userblogData.map((blog) => blog.get({ plain: true }));
    console.log(userblogs, "hey!!!!");
    res.render("dashboard",{ username, userblogs,
        loggedIn: req.session.logged_in
      });
    //contains my blog posts and options to add new (title and content),return to dashboard
})

module.exports = router;