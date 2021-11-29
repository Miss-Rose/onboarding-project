import Backbone from 'backbone';

const CounterModel = Backbone.Model.extend({
  defaults: {
    count: 0,
  }
});

export const counter = new CounterModel();
