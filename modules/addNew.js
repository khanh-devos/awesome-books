import showPopWin from './popWin.js';
import showBooks from './showBooks.js';

const addNew = (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const addBooks = JSON.parse(localStorage.getItem('addBooks'));

  const mybooks = addBooks || [];

  const id = mybooks.length === 0 ? 0 : mybooks[mybooks.length - 1].id + 1;

  const book = {
    id,
    title: title.value,
    author: author.value,
  };

  mybooks.push(book);
  localStorage.setItem('addBooks', JSON.stringify(mybooks));
  showPopWin();
  showBooks();
  document.querySelector('form').reset();
};

export default addNew;