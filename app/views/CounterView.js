import Marionette from 'backbone.marionette';
import template from './templates/counterView.hbs';
import counter from "../models/CounterModel";

export const CounterView = Marionette.ItemView.extend({
  el: '#counterItem',
  template,
  ui: {
    counter: '#counterItem'
  },
  modelEvents: {
    'change': 'render',
  },
  model: counter,
});
