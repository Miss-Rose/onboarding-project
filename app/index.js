import Radio from 'backbone.radio/build/backbone.radio';
import { App } from './app';

const cartChannel = Radio.channel('cart');
cartChannel.on('', function() {
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
