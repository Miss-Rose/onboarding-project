import Marionette from 'backbone.marionette';
import {counter} from '../models/CounterModel';

export const CounterView = Marionette.ItemView.extend({
  el: '#counterView',
  template: '#counterTemplate',
  ui: {
    counter: '#counterItem'
  },
  events: {
    'change @ui.counter': 'onCounterChange',
  },
  modelEvents: {
    'change': 'render',
  },
  model: counter,
  onCounterChange: function(e) {
    e.preventDefault();
    console.log('on counter change');
  },
});
