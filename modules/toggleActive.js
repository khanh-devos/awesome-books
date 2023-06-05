const toggleActive = (id) => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.classList.remove('active');
  });
  const clickedLink = document.getElementById(id);
  clickedLink.classList.add('active');
};

toggleActive();
