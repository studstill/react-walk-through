'use strict';

var React = require('react');

var CommentBox = require('./components/CommentBox.jsx');

React.render(
  // <h1>Hellow World</h1>,
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
