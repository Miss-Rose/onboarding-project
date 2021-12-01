import Marionette from 'backbone.marionette';
import template from './templates/counterView.hbs';
import { CounterModel } from '../models/CounterModel';
import Radio from 'backbone.radio/build/backbone.radio';

const myChannel = Radio.channel('card');
const counter = new CounterModel();

export const CounterView = Marionette.ItemView.extend({
  template,
  modelEvents: {
    'change': 'render',
  },
  model: counter,
  initialize() {
    this.listenTo(myChannel, 'save', this.onSave);
  },
  onSave() {
    let count = JSON.parse(window.localStorage.getItem('count') ? window.localStorage.getItem('count') : '[]');
    const id = `${window.location.href}`.split('/');
    count.push(id[id.length - 1]);
    window.localStorage.setItem('count', JSON.stringify(count));
    const products = JSON.parse(window.localStorage.getItem('count')).length;
    this.model.set('count', products);
  }
});
