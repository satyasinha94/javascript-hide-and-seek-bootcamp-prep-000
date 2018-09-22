
function getFirstSelector(selector) {
<<<<<<< HEAD
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
  return rankedList
}
function deepestChild () {
let deepChild = document.getElementById('grand-node').querySelectorAll('div');
return deepChild[deepChild.length - 1]
=======
  return document.querySelector(`${selector}`)
}

function nestedTarget () {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  const rankedList = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");

  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (i + `$(n)`).toString();
  }
  var parsed = parseInt(rankedList.innerHTML)
  return parsed
>>>>>>> c7400b75353be6a2e927158881054d77d7965c5c
}
