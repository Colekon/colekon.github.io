const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  console.log(x, y);

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const oddInteger = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * oddInteger}px, ${
      y * oddInteger
    }px)`;
  }
}

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log("it worked 1");
  }, 1000);
}

let isModalopen = false;
function toggleModal() {
  if (isModalopen) {
    isModalopen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalopen = !isModalopen;
  document.body.classList += " modal--open";
}
