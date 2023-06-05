import showNaviagtionBar from './modules/showNav.js';
import showTime from './modules/showTime.js';
import addNew from './modules/addNew.js';
import showBooks from './modules/showBooks.js';

showNaviagtionBar();
showTime();
document.querySelector('form').addEventListener('submit', addNew);
showBooks();
