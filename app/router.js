import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("cesium");
  this.route("headlines");
  this.route("welcome", { path: "/"});
});

export default Router;
