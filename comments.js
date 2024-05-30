// Create web server
const Comment = require('../models/comment');

exports.comment_list = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.render('comments', { comments });
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'Error fetching comments' });
  }
};

exports.comment_create_get = (req, res) => {
  res.render('comment_form');
};

exports.comment_create_post = async (req, res) => {
  const { author, content } = req.body;
  const newComment = new Comment({ author, content });
  try {
    await newComment.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'Error creating comment' });
  }
};

exports.comment_delete = async (req, res) => {
  const commentId = req.params.id;
  try {
    await Comment.findByIdAndDelete(commentId);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'Error deleting comment' });
  }
};
