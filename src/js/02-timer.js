



// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const input = document.querySelector('#datetime-picker')
const button = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')
const body = document.querySelector('body')
const DELAY = 1000;
const minutesSpan = document.querySelector('.label1')
let timeOfUser = null;

button.addEventListener('click', startTimer)

const options = {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  
    onClose(selectedDates) {
      timeOfUser = selectedDates[0].getTime();
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
Notiflix.Notify.failure('Выберете дату в будущем')
      } else {
            button.removeAttribute('disabled')
       Notiflix.Notify.success('Дата выбрана, вы можете запускать таймер')
      }
    
    },
}
   
flatpickr(input, options);



 function pad(value) {
    
     return   String(value).padStart(2, 0);
  
}


function startTimer() {
    setInterval(() => {
        const now = new Date();
        const userChoosenTime = (timeOfUser - now)
        const time = convertMs(userChoosenTime)
       
        if (userChoosenTime > 0) {
      days.textContent = pad(time.days)
        hours.textContent = pad(time.hours)
        minutes.textContent = pad(time.minutes)
            seconds.textContent = pad(time.seconds)
             console.log(time)
        }
        


        

        
    }, DELAY);
}





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}













// let id = null;

// id = setInterval(() => {
// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   const diff = tomorrow - now;

//   return diff / 1000 / 60 / 60;
//     };
    

// console.log(getSecondsToTomorrow());
// }, 1000);
 

// setTimeout(() => {
// clearInterval(id)
// }, 5000)





// const id = setInterval(() => {
//     console.log('setInterval 2000')
// },);

// console.log(id)


// setTimeout(() => {
// clearInterval(id)
// }, 5000)