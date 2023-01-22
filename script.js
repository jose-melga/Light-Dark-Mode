//document.documentElement is to do something on the html

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');




// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}



// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  /*
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');*/
  imageMode('light');
 
}


// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  imageMode('dark');
  
}






// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');//puede ser data-theme or data-loquesea or data-melancho
    localStorage.setItem('theme','dark');//key=theme, value=dark
    darkMode();
  } else {
    document.documentElement.removeAttribute('data-theme', 'dark');//lo que hace es eliminar el dark solamente porque este nombre no existe
    localStorage.setItem('theme','light');//key=theme, value=light
    lightMode();
  }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {//Siempre sale null si no se ejecuta el pulsador, pero si 
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {//ponemos esto porque queremos que el toggle este activo
    toggleSwitch.checked = true;
    darkMode();
  }
}


/*

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


*/