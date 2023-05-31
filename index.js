class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static showBooks() {
    const container = document.querySelector('.container');
    const addBooks = JSON.parse(localStorage.getItem('addBooks'));
    const mybooks = addBooks || [];

    container.innerHTML = '';

    if (mybooks.length === 0) {
      container.style.background = 'none';
    } else {
      container.style.background = '#f8f1f1';
    }

    const bookCards = mybooks.map((b) => `
      <ul class="book-ul">
        <li>
          <h3>"${b.title}"
          by
          ${b.author}</h3>
          <button class='btn' onclick=Book.removeBook(${b.id})>Remove</button>
        </li>
      </ul>
    `);
    container.innerHTML = bookCards.join('');
  }

  static addNew(e) {
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
    Book.showBooks();
    document.querySelector('form').reset();
  }

  static removeBook(id) {
    let addBooks = JSON.parse(localStorage.getItem('addBooks'));
    addBooks = addBooks.filter((e) => e.id !== id);

    localStorage.setItem('addBooks', JSON.stringify(addBooks));
    Book.showBooks();
  }

  static showIt(id) {
    const sectionList = ['list-section', 'add-section', 'about-section'];
    const navLinks = document.querySelectorAll('.nav-link');

    sectionList.forEach((e) => {
      if (e === id) {
        document.querySelector(`#${e}`).setAttribute('data-visible', 'true');
      } else {
        document.querySelector(`#${e}`).setAttribute('data-visible', 'false');
      }
    });

    navLinks.forEach((nav) => {
      const active = nav.classList.contains('active');
      if (active) {
        nav.classList.toggle('active');
      }
    });
  }

  static showNaviagtionBar() {
    const navigation = document.querySelector('#navigation-container');

    navigation.innerHTML = `<nav>
      <ul>
          <li class="nav-link active" data-page="list" 
          onclick='Book.showIt("list-section")'>List</li>
  
          <li class="nav-link" data-page="addNew"
          onclick='Book.showIt("add-section")'>Add new</li>
  
          <li class="nav-link" data-page="contact"
          onclick='Book.showIt("about-section")'>Contact</li>
      </ul>
    </nav>`;
  }
}

window.onload = () => {
  Book.showBooks();
  document.querySelector('form').addEventListener('submit', Book.addNew);

  Book.showNaviagtionBar();
};
