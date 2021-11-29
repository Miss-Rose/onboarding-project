import Marionette from 'backbone.marionette';
import template from './templates/zoomerView.hbs';

export const ZoomerView = Marionette.ItemView.extend({

  template,
  ui: {
    zoom: '#zoomImage',
    el: '#zoomEl',
  },
  events: {
    'click @ui.zoom': 'onImageClick',
    'mouseleave @ui.zoom': 'onMouseLeave',
    'mousemove @ui.zoom': 'onMouseMove',
  },
  modelEvents: {
    'change': 'render',
  },
  onAttach: function() {
    const imgSrc = this.ui.zoom.attr('src');
    this.ui.el.append(`<img scr=${imgSrc} >`);
  },
  onImageClick: function(e) {
    e.preventDefault();
    const element = e.target;
    element.style.opacity = 0;
    this.ui.el.style.backgroundImage = `url(${element.src})`;
    this.ui.el.style.backgroundSize = '200%';
  },
  onMouseMove: function(e) {
    const element = e.target;
    let dimension = element.getBoundingClientRect();
    const x = e.clientX - dimension.left;
    const y = e.clientY - dimension.top;
    const xP = Math.round(100 / (dimension.width / x));
    const yP = Math.round(100 / (dimension.height / y));
    this.ui.el.style.backgroundPosition = xP + '%' + yP + '%';
  },
  onMouseLeave: function(e) {
    const element = e.target;
    element.style.opacity = 1;
    this.ui.el.style.backgroundImage = '';
  }
});
