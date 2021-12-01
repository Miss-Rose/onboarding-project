import Marionette from 'backbone.marionette';
import template from './templates/buttonView.hbs';
import Radio from 'backbone.radio/build/backbone.radio';

const myChannel = Radio.channel('card');

export const ButtonView = Marionette.ItemView.extend({
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
    myChannel.trigger('save');
  },
});
