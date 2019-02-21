import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //tells it the route to look at
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    // this.route('show');
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
