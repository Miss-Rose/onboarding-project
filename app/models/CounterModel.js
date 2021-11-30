import Backbone from 'backbone';
import Radio from 'backbone.radio/build/backbone.radio';

const myChannel = Radio.channel('card');
const store = window.localStorage.getItem('count') ?
    JSON.parse(window.localStorage.getItem('count')).length : 0;

const CounterModel = Backbone.Model.extend({
  defaults: function() {
    return {
      count: store
    };
  },
});

const counter = new CounterModel();
myChannel.on('save', (num) => {
  counter.set('count', num);
});

export default counter;
