const books = [

];
const savedBooks = JSON.parse(sessionStorage.getItem('addBooks'));
// add new book
function addNew(e) {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const id = books.length === 0 ? 0 : books[books.length - 1].id + 1;

  const book = {
    id,
    title: title.value,
    author: author.value,
  };

  books.push(book);
  sessionStorage.setItem('addBooks', JSON.stringify(books));
  showBooks();
}

function saveFormData(e) {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const book = {
    title: title.value,
    author: author.value,
  };
  sessionStorage.setItem('addBooks', JSON.stringify(book));
}

function recallFormData() {
  document.querySelector('#title').value = savedBooks.title;
  document.querySelector('#author').value = savedBooks.author;
}

function removeBook(id) {
  savedBooks.splice(id, 1);
  showBooks();
  sessionStorage.setItem('addBooks', JSON.stringify(savedBooks));
}

function showBooks() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  const bookCards = savedBooks.map((b) => `
    <ul style="list-style: none">
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

window.onload = () => {
  showBooks();
  document.querySelector('form').addEventListener('submit', addNew);

  //   document.querySelector('form').addEventListener('input', saveFormData);

//   recallFormData();
};