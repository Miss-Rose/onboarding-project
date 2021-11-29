// import Radio from 'backbone.radio/build/backbone.radio';
import { App } from './app';
import {ZoomerView} from "./views/ZoomerView";
import {ButtonView} from "./views/ButtonView";

// const cartChannel = Radio.channel('cart');
// cartChannel.on('', function() {
// });

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.addRegions({
    zoomer: '#zoomImage',
    addButton: '#counterButton',
    cartItem: '#counterItem'
  });
  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();
  app.zoomer.show(new ZoomerView());
  app.addButton.show(new ButtonView());

});
