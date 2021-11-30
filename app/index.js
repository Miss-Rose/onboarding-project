import {ZoomerView} from "./views/ZoomerView";
import {ButtonView} from "./views/ButtonView";
import {CounterView} from "./views/CounterView";
import {App} from "./app";
import CounterModel from "./models/CounterModel";
import counter from "./models/CounterModel";

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();

  if (document.getElementById('zoomImage')) {
    app.addRegions({
      zoomer: '#zoomImage',
      addButton: '#buttonView',
    })
  }

  app.addRegions({
    cartItem: '#counterView',
  });

  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();

  if (document.getElementById('zoomImage')) {
    app.zoomer.show(new ZoomerView());
    app.addButton.show(new ButtonView());
  }

  app.cartItem.show(new CounterView());
});
