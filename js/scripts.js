var iSides = function() {

  var num0 = document.getElementById('a').value;
  var num1 = document.getElementById('b').value;
  var num2 = document.getElementById('c').value;



  if (num0 > 0 && num1 > 0 && num2 > 0) {

    if (num0 === num1 && num2 === num0 && num1 === num2) {

      alert("Equilateral Triangle");
    } else if (num0 == num1 || num0 == num2 || num1 == num2) {

      if (num0 + num1 <= num2 || num0 + num2 <= num1 || num1 + num2 <= num0) {
        alert("Triangle cannot be formed using those values");
      } else {
        alert("Isosceles Triangle");
      }
    } else
      if (num0 + num1 > num2 || num0 + num2 > num1 || num1 + num2 > num0) {
        alert("Scalene Triangle");
      } else {
        alert("Not a triangle");
      }
    }
  } else {
    alert("The values of a triangle have to be greater than 0");
  }
};
