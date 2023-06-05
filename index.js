import showNaviagtionBar from './modules/showNav.js';
import showBooks from './modules/showBooks.js';
import showTime from './modules/showTime.js';
import addNew from './modules/addNew.js';

showNaviagtionBar();
showBooks();
showTime();
document.querySelector('form').addEventListener('submit', addNew);
