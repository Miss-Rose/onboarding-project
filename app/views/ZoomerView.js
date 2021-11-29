import Marionette from 'backbone.marionette';
import template from './templates/zoomerView.hbs';

export const ZoomerView = Marionette.ItemView.extend({
  template,
  ui: {
    zoomImage: '#zoomer-img',
    baseImage: '#base-img'
  },
  events: {
    'click @ui.baseImage': 'onImageClick',
    'mouseleave @ui.zoomImage': 'onMouseLeave',
    'mousemove @ui.zoomImage': 'onMouseMove',
  },
  modelEvents: {
    'change': 'render',
  },
  onAttach: function() {
    const imgSrc = this.$el.parent().data('src');
    this.ui.baseImage.append(`<img src=${imgSrc}>`);

  },
  onImageClick: function(e) {
    e.preventDefault();
    const element = e.target;
    this.ui.baseImage.css('display', 'none');
    this.ui.zoomImage.css('display', 'block');
    this.ui.zoomImage.css('background-image', `url(${element.src})`);
    this.ui.zoomImage.css('background-size', '200%');
    this.ui.zoomImage.css('width', '300px');
    this.ui.zoomImage.css('height', '400px');
  },
  onMouseMove: function(e) {
    const element = e.target;
    let dimension = element.getBoundingClientRect();
    const x = e.clientX - dimension.left;
    const y = e.clientY - dimension.top;
    const xP = Math.round(100 / (dimension.width / x));
    const yP = Math.round(100 / (dimension.height / y));
    this.ui.zoomImage.css('background-position', xP + '%' + yP + '%');
  },
  onMouseLeave: function(e) {
    this.ui.zoomImage.css('background-image', '');
    this.ui.zoomImage.css('display', 'none');
    this.ui.baseImage.css('display', 'block');
  }
});
