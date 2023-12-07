import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ggggf-класс-l');
  this.route('i-i-s-ggggf-класс-e',
  { path: 'i-i-s-ggggf-класс-e/:id' });
  this.route('i-i-s-ggggf-класс-e.new',
  { path: 'i-i-s-ggggf-класс-e/new' });
});

export default Router;
