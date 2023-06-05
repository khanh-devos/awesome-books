const showIt = (id) => {
  const sectionList = ['list-section', 'add-section', 'about-section'];
  sectionList.forEach((e) => {
    if (e === id) {
      document.querySelector(`#${e}`).setAttribute('data-visible', 'true');
    } else {
      document.querySelector(`#${e}`).setAttribute('data-visible', 'false');
    }
  });
};

showIt();