import Marionette from 'backbone.marionette';

export const ZoomerView = Marionette.ItemView.extend({
    el: 'zoomer-view',
    template: '#zoomer-template',
    // ui: {
    //     zoomImage: '#zoomImage,'
    // },
    // events: {
    //     'click @ui.zoomImage': 'onImageClick',
    // },
    // modelEvents: {
    //     'change': 'render',
    // },
    // onImageClick: function (e) {
    //     e.preventExtensions();
    //     console.log('click on image');
    // }
});
