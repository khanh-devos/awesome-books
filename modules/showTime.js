const showTime = () => {
  const dateTime = document.querySelector('.time');
  const timeDate = () => {
    setInterval(() => {
      const date = new Date().toUTCString();
      dateTime.innerHTML = date.toString().substring(0, date.indexOf(' GMT'));
    }, 0);
  };

  timeDate();
};

export default showTime;