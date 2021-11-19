/* 

   ------------------------------- SEND EMAIL -------------------------------

*/

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "colekonmusic@gmail.com",
      "template_e7nrxbc",
      event.target,
      "user_ew2b5AYyNH8FSnXLgF629"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please, contact me directly on Instagram or email: colekonmusic@gmail.com"
      );
    });
}

/* 

   ------------------------------- MODAL -------------------------------

*/

let isModalopen = false;
function toggleModal() {
  if (isModalopen) {
    isModalopen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalopen = !isModalopen;
  document.body.classList += " modal--open";
}

/* 

   ------------------------------- SHAPES -------------------------------

*/

const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const oddInteger = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * oddInteger}px, ${
      y * oddInteger
    }px)`;
  }
}
