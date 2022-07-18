var elementMinus = document.querySelectorAll('.fa-square-minus');
var elementPlus = document.querySelectorAll('.fa-square-plus');
var numIndex = document.querySelectorAll('.count');

elementMinus[0].onclick = function(){
  console.log(numIndex[0].textContent = String(Number(numIndex[0].textContent) - 1));
}
elementPlus[0].onclick = function(){
  console.log(numIndex[0].textContent = String(Number(numIndex[0].textContent) + 1));
}

elementMinus[1].onclick = function(){
  console.log(numIndex[1].textContent = String(Number(numIndex[1].textContent) - 1));
}
elementPlus[1].onclick = function(){
  console.log(numIndex[1].textContent = String(Number(numIndex[1].textContent) + 1));
}


