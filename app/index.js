var React = require('react');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");
var GameContainer = require('./containers/GameContainer');

ReactDOM.render(<GameContainer />,
  document.getElementById("app")
);
