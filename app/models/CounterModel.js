import Backbone from 'backbone';
import Radio from "backbone.radio/build/backbone.radio";

const myChannel = Radio.channel('card');

const CounterModel = Backbone.Model.extend({
  defaults: {
    count: 0,
  },
});

const counter = new CounterModel();
myChannel.on('save', (num) => {
  counter.set('count', num);
  console.log(num)
});

export default counter;
