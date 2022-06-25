import '../styles/main.scss'
const reader = require('g-sheets-api');
import swipe from './swipe'

let space = false;
let words = []
let id = 0
let word = document.getElementById('word')
let translation = document.getElementById('translation')
let change = false;
let changeText = document.getElementById('change-text')
let changeButton = document.getElementById('change-button')

changeButton.addEventListener("click", event => {
  if (change) {
    changeText.innerHTML = "English word - Russian word"
    change = !change
    changeLang()
  } else {
    changeText.innerHTML = "Russian word - English word"
    change = !change
    changeLang()
  }
})

document.addEventListener('swiped-right', function(e) {
    console.log(e.target); // the element that was swiped
});

const readerOptions = {
  apiKey: 'AIzaSyBGIB_zTm4GCRAIChXoqtSTEUpVujf_sxU',
  sheetId: '1aqssJJ9IvDDO21ylxiXSW2SjuPK5iO8r3tdZhGjGgBk',
  sheetNumber: 1,
  
  returnAllResults: false,
};

reader(readerOptions, (results) => {
  console.log(results)
  words = results
  start()
});


document.addEventListener('swiped', function(e) {
    nextWord()
});
function start() {
  id = Math.floor(Math.random() * words.length);
  showWord(id);
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 32) {
      nextWord()
    }
  });
}
function nextWord() {
      if(space === true) {
        id = Math.floor(Math.random() * words.length)
        showWord(id)
        space = !space;
      } else {
        showTranslation(id)
        space = !space;
      }
}
function changeLang() {
  id = Math.floor(Math.random() * words.length)
  showWord(id);
  space = !space;
}
function showWord (id) {
  if (change) {
    word.innerHTML = words[id].translation

  } else {
    word.innerHTML = words[id].word
  }
  translation.innerHTML = "?"
}
function showTranslation(id) {
  if (change) {
    translation.innerHTML = words[id].word

  } else {
    translation.innerHTML = words[id].translation
  }
}