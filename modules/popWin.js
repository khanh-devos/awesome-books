const showPopWin = () => {
  const popWin = document.createElement('div');
  popWin.className = 'pop-win';
  document.querySelector('body').appendChild(popWin);

  popWin.innerHTML = `
  <div class="msg-win">
    <h4>New book successfully added</h4>
  </div>
  `;
  setTimeout(() => popWin.remove(), 2000);
};

export default showPopWin;