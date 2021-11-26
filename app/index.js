import { App } from './app';
import { ZoomerView } from './views/ZoomerView';
import { CountView } from './views/CountView';
import Backbone from 'backbone';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.addRegions({
    zoomer: '#zoomImages',
    card: '#cartView',
  });
  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();
  app.zoomer.show(new ZoomerView());
  app.card.show(new CountView());
});
