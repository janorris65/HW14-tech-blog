const router = require("express").Router();
import { User, Blog, Comment } from "../models/index.js";
import withAuth from "../utils/auth.js";

router.get("/", async (req,res) => {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs, "hey!!!!");
    res.render('homepage',{ blogs,
        loggedIn: req.session.logged_in
      });
    // contains all blog posts, needs creator names, and click access to update
})

router.get("/blogpost/:id", withAuth, async (req,res)=> {
    
    const blogpostData = await Blog.findByPk(req.params.id, {
        include:[User]
    });
    const blogpost = blogpostData.get({ plain: true });

    const commentblogpostData = await Comment.findAll({
        where: {
            blog_id:req.params.id
        }
    },{
       include:[User]
    })
    const commentblogposts = commentblogpostData.map((blog) => blog.get({ plain: true }));

    res.render("blogpost",{ blogpost, commentblogposts })
    // render clicked blogpost, option to leave comment, show comments
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

router.get("/modblog/:id", withAuth, async (req,res)=> {
    
    const modblogpostData = await Blog.findByPk(req.params.id, {
        include:[User]
    });
    const modblogpost = modblogpostData.get({ plain: true });

    const commentblogpostData = await Comment.findAll({
        where: {
            blog_id:req.params.id
        }
    },{
       include:[User]
    })
    const commentblogposts = commentblogpostData.map((blog) => blog.get({ plain: true }));

    res.render("modblog",{ modblogpost, commentblogposts })
    // render clicked blogpost, option update or delete
})

export default router;