var React = require('react');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");
var Routes = require('./config/Routes');

ReactDOM.render(Routes,
  document.getElementById("app")
);
