/* All my global variables declaration */

const textarea = document.querySelector('.areatext')
const cssarea = document.querySelector('.areacss')
const jsarea = document.querySelector('.areajs')
const count = document.getElementById('CountCharac')
const resultat = document.getElementById('resultat')
const progressbar = document.getElementById('ProgressBar');
const buttonshtml = document.querySelectorAll('.ButtonsHtml')
const buttonscss = document.querySelectorAll('.ButtonsCss')
const buttonsjs = document.querySelectorAll('.ButtonsJs')
let inputcharac = 0;



/* Target function on textarea to react on keyup , to count characters and to animate
the progress bar */
textarea.onkeyup = (e) => {
let widthbar = 400 / inputcharac
const yellowbar = (25 /100) * inputcharac
const orangebar = (50 / 100) * inputcharac
const redbar = (75 / 100) * inputcharac
const textlength = e.target.value.replace(/(<([^>]+)>)/gi, "").length


  count.innerHTML = (inputcharac - textlength);
  resultat.innerHTML = (e.target.value)
  progressbar.style.width = textlength * widthbar + 'px';
  if (textlength >= yellowbar && textlength < orangebar) {
    progressbar.style.backgroundColor = 'yellow'
  } else if (textlength >= orangebar && textlength < redbar) {
    progressbar.style.backgroundColor = '#ff6905'
  } else if(textlength >= redbar && textlength < inputcharac) {
    progressbar.style.backgroundColor = 'red'
  } else if (textlength == inputcharac) {
    progressbar.style.backgroundColor = 'black'
    document.getElementById('CountCharac').innerHTML = "Vous avez atteint la limite de charactères"
  } else {
    progressbar.style.backgroundColor = 'green'
  }

};

  /* Function to set max characters to 200 (default)*/

  function setBase() {
    inputcharac = 200 ;
  document.querySelector('textarea').replace(/(<([^>]+)>)/gi, "").maxLength = inputcharac 
  }
  
  /* Function to set max characters by the user*/
  
  function setInput() {
  inputcharac = parseInt(document.getElementById('nbchar').value);
  document.querySelector('textarea').maxLength = inputcharac 
  console.log(inputcharac)
  }



/* Function to display the input use to set max characters */


function displayInput() {
  if (document.getElementById('nbchar').style.display == "none") {
    document.getElementById('nbchar').style.display = "block"
  } else {
    document.getElementById('nbchar').style.display = "none"
  }
}

/* Function to display the confirm button to set max characters */

function displayButton() {
  if (document.getElementById('valider').style.display == "none") {
    document.getElementById('valider').style.display = "block"
  } else {
    document.getElementById('valider').style.display = "none"
  }
}

/* Function to make work buttons on side of each textarea which allow to write faster :
tags, css properties or js method */


buttonshtml.forEach((items) => {
items.addEventListener('click', () => {
textarea.value += items.value
})   
});

buttonscss.forEach((items) => {
  items.addEventListener('click', () => {
  cssarea.value += items.value
  })   
  });

buttonsjs.forEach((items) => {
    items.addEventListener('click', () => {
    jsarea.value += items.value
    })   
    });



