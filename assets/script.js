const scriptURL =
  'https://script.google.com/macros/s/AKfycbxA-Ymg_m4UXxwREhu3JxvcukpGPR-S0gr3kp49mI__0-FoWf2NLTcvSClww37s-l7rpQ/exec';
const form = document.forms['dicoding'];
//   const myAlert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      alert('Message successfully sent! Thankyou!');
      //reset pesan
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
