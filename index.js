function showBooks() {
  const container = document.querySelector('.container');
  const addBooks = JSON.parse(localStorage.getItem('addBooks'));

  const mybooks = addBooks || [];

  container.innerHTML = '';
  const bookCards = mybooks.map((b) => `
    <ul class="book-ul">
      <li>
        <h3>${b.title}</h3>
        <h3>${b.author}</h3>
        <button onclick=removeBook(${b.id})>Remove</button>
        <hr>
      </li>
    </ul>
  `);
  container.innerHTML = bookCards.join('');
}

// add new book
function addNew(e) {
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
  showBooks();
}

function removeBook(id) {
  let addBooks = JSON.parse(localStorage.getItem('addBooks'));
  addBooks = addBooks.filter((e) => e.id !== id);

  localStorage.setItem('addBooks', JSON.stringify(addBooks));
  showBooks();
}

window.onload = () => {
  showBooks();
  document.querySelector('form').addEventListener('submit', addNew);
};
