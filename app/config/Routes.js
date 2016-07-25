var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var GameContainer = require('../containers/GameContainer');
var StartScreen = require('../components/StartScreen');

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={StartScreen} />
    <Route path='game' component={GameContainer}></Route>
  </Router>
);

module.exports = Routes;
