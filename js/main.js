/* Motor del programa */
import {arranque} from './arranque.js';
import {fullscreen} from './fullscreen.js';
import {toggle_flotante} from './menu-ar.js';
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('visible');
    arranque();
    fullscreen();
    toggle_flotante();
});