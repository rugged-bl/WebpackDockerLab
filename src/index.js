'use strict';

import './style.css';

let textarea = document.querySelector('.textarea');
let wordsValue = document.querySelector('.words-value');
let charactersValue = document.querySelector('.characters-value');
let sentencesValue = document.querySelector('.sentences-value');

let charactersCount = function (str) {
  return str.length;
};

let wordsCount = function (str) {
  return str.trim().split(/\s+/).length;
};

let sentencesCount = function (str) {
  return str.split('.').length - 1;
};

let onInputChange = function () {
  charactersValue.textContent = 'Количество символов в тексте: ' + charactersCount(textarea.value);
  wordsValue.textContent = 'Количество слов в тексте: ' + wordsCount(textarea.value);
  sentencesValue.textContent = 'Количество предложений в тексте: ' + sentencesCount(textarea.value);
};

textarea.addEventListener('input', onInputChange);