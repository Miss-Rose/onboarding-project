import { App } from "./app";
import { ZoomerView } from "./views/ZoomerView";

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.addRegions({
        zoomer: '#zoomer-view',
    });
    app.on('start', function() {
        Backbone.history.start();
    });
    app.start();
    app.zoomer.show(new ZoomerView());
})