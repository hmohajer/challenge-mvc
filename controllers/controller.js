const { Feed } = require("../models/Feed");

const homepage = (req, res) => {
    res.redirect("/feed");
};

const feed = (req, res) => {
    Feed.find()
        .then((result) => res.render("index", { feed: result , err:null}))
        .catch((err) => console.log(err));
};

const addPost = (req, res) => {
    const feed = new Feed(req.body);
    feed.save()
        .then((result) => res.redirect("/feed"))
        // .catch((err) => console.log(err.errors.name.message));
        .catch((err) => res.render("index", { feed: [], err:err.errors })); //console.log(err));
};

const deletePost = (req, res) => {
    Feed.findByIdAndDelete(req.params.id)
        .then((result) => res.redirect("/feed"))
        .catch((err) => console.log(err));
};

const editPost = (req, res) => {
    if (req.method == "GET") {
        Feed.findById(req.params.id)
            .then((result) => res.render("editPost", { post: result, err:null }))
            .catch((err) => console.log(err));
    }
    if (req.method == "POST") {
        Feed.findByIdAndUpdate(req.params.id, req.body)
            .then((result) => res.redirect(`/feed/${req.params.id}`))
            .catch((err) => console.log(err));
            
    }
};

const showPost = (req, res) => {
    Feed.findById(req.params.id)
        .then((result) => res.render("showPost", { post: result }))
        .catch((err) => console.log(err));
};

module.exports = {
    homepage,
    feed,
    addPost,
    deletePost,
    editPost,
    showPost,
};
