document.getElementById('btn-Celsius').onclick = convertCelsius;


function convertCelsius(){

  var celsius = document.getElementById('celsius').value;
      farhenheit = celsius * 2;
  if (farhenheit > 100){
    document.getElementById('farhenheit').value = 'hot!!';
  } else {
    document.getElementById('farhenheit').value = farhenheit;
  }
}


document.getElementById('btn-farhenheit').onclick = convertFarhenheit;


function convertFarhenheit() {

var farhenheit = document.getElementById('farhenheit').value;
  celsius = farhenheit / 2;

  if (celsius > 50) {
    document.getElementById("celsius").value = "hot!!";
  } else {
    document.getElementById("celsius").value = celsius;
  }
}


