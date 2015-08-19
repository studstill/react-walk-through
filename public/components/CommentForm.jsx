'use strict';

var React = require('react');

// CommentForm
module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeHolder="Your name" ref="author"/>
        <input type="text" placeHolder="Say Something..." ref="text"/>
        <input type="submit" value="Post" />
      </form>
    )
  }
});
