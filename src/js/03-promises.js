import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', buttonSubmit);

  let delay = null
  let step = null;
  let amount = null;


function buttonSubmit(event) {
  event.preventDefault();

  let amount = Number(event.target.amount.value);


  let delay = Number(event.target.delay.value);
  let step = Number(event.target.step.value);


  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

      
         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);


          console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      });
     delay += step;
  }
  event.currentTarget.reset()
}



function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random();
      if (shouldResolve > 0.3) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise
}
