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
    let count = JSON.parse(window.localStorage.getItem('count') ? window.localStorage.getItem('count') : '[]');
    const id = `${window.location.href}`.split('/');
    count.push(id[id.length - 1]);
    window.localStorage.setItem('count', JSON.stringify(count));
    const products = JSON.parse(window.localStorage.getItem('count')).length;
    myChannel.trigger('save', products);
  },
});
