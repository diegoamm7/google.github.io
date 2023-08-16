

var texto = document.getElementById('texto');
var historial = document.getElementById('history');


historial.addEventListener('click', function(){
    historial.style.display = 'block';
    console.log('hiciste click en el imput');
    history()
});