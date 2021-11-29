import Marionette from 'backbone.marionette';

export const ButtonView = Marionette.ItemView.extend({
  el: '#buttonView',
  template: '#buttonTemplate',
  ui: {
    button: '#counterButton'
  },
  events: {
    'click @ui.button': 'onButtonClick',
  },
  modelEvents: {
    'change': 'render',
  },
  onButtonClick: function(e) {
    e.preventDefault();
    console.log('on btn click');
  },
});
