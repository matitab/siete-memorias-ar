/* Motor del programa */
import {arranque} from './arranque.js';
import { fullscreen } from './fullscreen.js';
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('visible');
    fullscreen();
    arranque();
});