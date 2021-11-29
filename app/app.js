import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import { ZoomerView } from './views/ZoomerView';
import { ButtonView } from './views/ButtonView';
import { CounterView } from './views/CounterView';


export const App = Marionette.Application.extend({
  regions: {
    zoomer: '#zoomImage',
    addButton: '#counterButton',
    cartItem: '#counterItem'
  },
  initialize () {
    this.showChildView('zoomer', new ZoomerView());
    this.showChildView('addButton', new ButtonView());
    this.showChildView('cartItem', new CounterView());
    Backbone.history.start();
  }
});
