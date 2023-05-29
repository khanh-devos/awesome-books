const books = [
  {
    id: 0,
    title: 'Book1',
    author: 'Author1',
  },
  {
    id: 1,
    title: 'Book2',
    author: 'Author2',
  },
]

function removeBook(id) {
  
}

function showBooks(){
  const container = document.querySelector('.container');
  const bookCards = books.map( b => `
    <ul style="list-style: none">
      <li>
        <h3>${b.title}</h3>
        <h3>${b.author}</h3>
        <button onclick=removeBook(${b.id})>Remove</button>
      </li>
    </ul>
  `)
  //console.log(bookCards);  
  container.innerHTML = bookCards.join("");
}

window.onload = () => {
  showBooks();

} 