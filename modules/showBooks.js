const showBooks = () => {
  const container = document.querySelector('.container');
  const addBooks = JSON.parse(localStorage.getItem('addBooks'));
  const mybooks = addBooks || [];
  container.innerHTML = '';
  const bookCards = mybooks.map((b) => `
    <ul class="book-ul">
      <li class="book-li">
      <h3>"${b.title}"
      by
      ${b.author}</h3>
      <button class='btn' 
      onclick="removeBook(${b.id}); showBooks2()">Remove</button>
      </li>
    </ul>
  `);
  if (mybooks.length === 0) {
    container.style.background = 'none';
    container.innerHTML = `
      <p>There is no books yet</p>
      <p>go to Add new tab and add a book !
      <a class="nav-link" id="addNew"
          onclick='showIt("add-section");  
          toggleActive("addNew");' >Add new</a>
      </p>
      
      `;
  } else {
    container.style.background = '#f8f1f1';
    container.innerHTML = bookCards.join('');
  }
};

export default showBooks;