import Marionette from 'backbone.marionette';
import template from './templates/counterView.hbs';

export const ButtonView = Marionette.ItemView.extend({
  // el: '#buttonView',
  template,
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
