import Alpine from 'alpinejs';
import dataDOM from './modules/Alpine.data/DOM';

window.Alpine = Alpine

Alpine.data("xDOM", dataDOM)

// Start Alpine when the page is ready.
window.addEventListener("DOMContentLoaded", () => {
    Alpine.start();
});

