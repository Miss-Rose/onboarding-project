import Marionette from 'backbone.marionette';

export const ZoomerView = Marionette.ItemView.extend({
  el: '#zoomView',
  template: '#zoomTemplate',
  ui: {
    zoom: '#zoomImage'
  },
  events: {
    'click @ui.zoom': 'onImageClick',
    'mouseleave @ui.zoom': 'onMouseLeave',
    'mousemove @ui.zoom': 'onMouseMove',
  },
  modelEvents: {
    'change': 'render',
  },
  onImageClick: function(e) {
    e.preventDefault();
    const element = e.target;
    element.style.opacity = 0;
    this.el.style.backgroundImage = `url(${element.src})`;
    this.el.style.backgroundSize = '200%';
  },
  onMouseMove: function(e) {
    const element = e.target;
    let dimension = element.getBoundingClientRect();
    const x = e.clientX - dimension.left;
    const y = e.clientY - dimension.top;
    const xP = Math.round(100 / (dimension.width / x));
    const yP = Math.round(100 / (dimension.height / y));
    this.el.style.backgroundPosition = xP + '%' + yP + '%';
  },
  onMouseLeave: function(e) {
    const element = e.target;
    element.style.opacity = 1;
    this.el.style.backgroundImage = '';
  }
});
