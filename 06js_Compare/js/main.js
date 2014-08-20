var total = 0;

document.getElementById('zero').onclick = zero;
document.getElementById('add5').onclick = add5;
document.getElementById('add10').onclick = add10;
document.getElementById('sub1').onclick = sub1;
document.getElementById('multi2').onclick = multi2;
document.getElementById('divide5').onclick = divide5;

function zero() {
  total = 0;
  document.getElementById('result').innerHTML = total;
}

function add5() {
  total = total + 5;
  document.getElementById('result').innerHTML = total;
}

function add10() {
  total = total + 10;
  document.getElementById('result').innerHTML = total;
}

function sub1() {
  total = total - 1;
  document.getElementById('result').innerHTML = total;
}

function multi2() {
  total = total * 2;
  document.getElementById('result').innerHTML = total;
}

function divide5() {
  total = total / 5;
  document.getElementById('result').innerHTML = total;
}






// When the user clicks the button, run the compare function
document.getElementById('submit').onclick = compare;

function compare() {
  
  // Get the value stored in #a
  var a = document.getElementById('a').value;
  a = parseFloat(a);
  
  // Get the value stored in #b
  var b = document.getElementById('b').value;
  b = parseFloat(b);
  
  // Set up a variable to store the comparison operator
  var comparison;
  
  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = '>';
  } else if(a < b) {
    comparison = '<';
  } else {
    comparison = '=';
  }
  
  // Print `comparison` string on the page
  document.getElementById('comparison').innerHTML = comparison;
  

}
