import Backbone from 'backbone';

const store = window.localStorage.getItem('count') ?
    JSON.parse(window.localStorage.getItem('count')).length : 0;

export const CounterModel = Backbone.Model.extend({
  defaults: function() {
    return {
      count: store
    };
  },
});
