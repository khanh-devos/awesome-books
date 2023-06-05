const showNaviagtionBar = () => {
  document.querySelector('#navigation-container').innerHTML = `
  <nav>
    <h5>Awesome Books</h5>
    <ul>
      <li class="nav-link active" id="list" 
      onclick="showIt('list-section'); toggleActive(this.id)"  >List</li>

      <li class="nav-link" id="addNew"
      onclick="showIt('add-section'); toggleActive(this.id)" >Add new</li>

      <li class="nav-link" id="contact"
      onclick="showIt('about-section'); toggleActive(this.id)" >Contact</li>
    </ul>
  </nav>
  `;
};

export default showNaviagtionBar;
