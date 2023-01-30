const router = require("express").Router();
const { User,Blog, Comment } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
  
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  // Logs an exisiting user in
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
  // Creates a new user
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  // Log out
});


router.post('/blogpost', async (req, res) => {
  try {
      

    const userData = await Blog.create({
      post_title:req.body.title,
      post_content:req.body.content,
      user_id:req.session.user_id
    });

    console.log(userData)

      res.status(200).json(req.body);
   
  } catch (err) {
    res.status(400).json(err);
  }
  // Creates a new blog post
});

router.post('/commentpost', async (req, res) => {
  try {
const blogcommentFind = await Blog.findOne({ where:{ createdAt: req.body.commenttag }})

    const userData = await Comment.create({
      comment_content:req.body.comment,
      user_id:req.session.user_id,
      blog_id:blogcommentFind.id
    });

    console.log(userData)

      res.status(200).json(req.body);
   
  } catch (err) {
    res.status(400).json(err);
  }
  // Creates a new comment post
});

router.put('/update', async (req, res) => {
  try {
const blogcommentFind = await Blog.findOne({ where:{ createdAt: req.body.updatetag }})
const keepoldblog = blogcommentFind.post_content;

    const userData = await Blog.update({
      post_content: keepoldblog + '; ' + req.body.update,
    },
    {
      where:{createdAt: req.body.updatetag}
    }
    );

    console.log(userData)

      res.status(200).json(req.body);
   
  } catch (err) {
    res.status(400).json(err);
  }
  // Update an old post
});

router.delete('/delete', async (req,res)=>{
  try {
  Blog.destroy({
    where:{createdAt: req.body.deltag}
  })
  res.status(200).json({ message: "Message Deleted!" });
} catch (err){
  res.status(400);
}});


module.exports = router;