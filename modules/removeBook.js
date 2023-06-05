const removeBook = (id) => {
  let addBooks = JSON.parse(localStorage.getItem('addBooks'));
  addBooks = addBooks.filter((e) => e.id !== id);

  localStorage.setItem('addBooks', JSON.stringify(addBooks));
};

removeBook();