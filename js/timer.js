const timerBlock = document.querySelector(".timer__time");
const deadLine = '31 mar 2026';
let interval2;

const updateClock2 = () => {
  const date = new Date().getTime();
  const dateDeadLine = new Date(deadLine).getTime();
  const timeRemaining = (dateDeadLine - date);
  const dd = new Date(timeRemaining);
  const time = dd.toISOString().split('T')[1].split('.')[0];
  const day = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  if (timeRemaining <= 0) {
    clearInterval(interval2);
    timerBlock.textContent = '00:00:00';
  } else {
    if (day) timerBlock.textContent = `${day} дн. ${time}`;
    else timerBlock.textContent = `${time}`;
  }
};
updateClock2();
interval2 = setInterval(updateClock2, 700);

// let interval;
// const updateClock = () => {
//   const date = new Date().getTime();
//   const dateDeadLine = new Date(deadLine).getTime();
//   const timeRemaining = (dateDeadLine - date) / 1000;

//   const hours = Math.floor(timeRemaining / (60 * 60));
//   const minutes = Math.floor((timeRemaining / 60) % 60);
//   const seconds = Math.floor(timeRemaining % 60);

//   timerBlock.textContent = `${f(hours)}:${f(minutes)}:${f(seconds)}`;
//   if (timeRemaining <= 0) {
//     clearInterval(interval);
//     timerBlock.textContent = '00:00:00';
//   }
// };
// function f(value) {
//   return value < 10 ? '0' + value : value;
// }

// updateClock();
// interval = setInterval(updateClock, 1500);
