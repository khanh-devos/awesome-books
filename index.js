const books = [

];

// add books
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  const book = {
    title: title.value,
    author: author.value,
  };

  books.push(book);
  localStorage.setItem('addBooks', JSON.stringify(books));
});
const savedBooks = JSON.parse(localStorage.getItem('addBooks'));

// function removeBook(id) {

// }

function showBooks() {
  const container = document.querySelector('.container');
  const bookCards = books.map((b) => `
    <ul style="list-style: none">
      <li>
        <h3>${b.title}</h3>
        <h3>${b.author}</h3>
        <button onclick=removeBook(${b.id})>Remove</button>
      </li>
    </ul>
  `);
  // console.log(bookCards);
  container.innerHTML = bookCards.join('');
}

window.onload = () => {
  showBooks();
};