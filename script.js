const button = document.getElementById('change-background');
const body = document.body;

button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

let isDark = false;

button.addEventListener('click', () => {
  if (isDark) {
    body.style.backgroundImage = "url('Backgroundlight.png')";
    isDark = false;
  } else {
    body.style.backgroundImage = "url('Backgrounddark.png')";
    isDark = true;
  }
});