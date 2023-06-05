import { DateTime } from './luxon.js';

const showTime = () => {
  const dateTime = document.querySelector('.time');
  const timeDate = () => {
    setInterval(() => {
      const date = DateTime.now().toJSDate();
      dateTime.innerHTML = date;
    }, 1000);
  };

  timeDate();
};

export default showTime;