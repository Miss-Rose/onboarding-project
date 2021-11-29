// import Radio from 'backbone.radio/build/backbone.radio';
import {ZoomerView} from "./views/ZoomerView";
import {ButtonView} from "./views/ButtonView";
import {CounterView} from "./views/CounterView";
import Marionette from "backbone.marionette";

// const cartChannel = Radio.channel('cart');
// cartChannel.on('', function() {
// });
 const App = Marionette.Application.extend();

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.addRegions({
    zoomer: '#zoomImage',
    addButton: '#buttonView',
    cartItem: '#counterItem'
  });

  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();

  app.zoomer.show(new ZoomerView());
  app.addButton.show(new ButtonView());
  app.cartItem.show(new CounterView());
});
