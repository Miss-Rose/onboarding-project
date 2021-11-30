import {ZoomerView} from "./views/ZoomerView";
import {ButtonView} from "./views/ButtonView";
import {CounterView} from "./views/CounterView";
import {App} from "./app";
import CounterModel from "./models/CounterModel";
import counter from "./models/CounterModel";

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.addRegions({
    zoomer: '#zoomImage',
    addButton: '#buttonView',
    cartItem: '#counterView',
  });

  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();

  app.zoomer.show(new ZoomerView());
  app.addButton.show(new ButtonView());
  app.cartItem.show(new CounterView());
});
