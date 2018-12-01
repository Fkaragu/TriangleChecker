//--------Accepting user input via prompts-----------------------------------//
//-------Original Content -----------------------------------------------------
//------------------------------------------------------------------------------
//sides is the main function for user input from UI prompts...................

var sides = function() {

  var info = Array();

  for (x = 0; x < 3; x++) {
    info[x] = parseFloat(prompt("Enter the length of a triangle: ", "0"), 10);
  }
};

// --------------End of the main function------------------------------------
// ----Start of Equilateral function -------------------------------------------
var equChecker = function(num0, num1, num2) {
  //condition to check if 3 entries are matching to be on the main function
  if (num0 > 0 && num1 > 0 && num2 > 0) {
    alert("Equilateral Triangle");
  } else {
    alert("The values of a triangle have to be greater than 0");
  }
};
// --------------End of the Equilateral function--------------------------------
//-------Start of Isosceles function -------------------------------------------
var isosChecker = function(num0, num1, num2) {
  //condition to check if 2 entries are matching to be on the main function
  if (num0 > 0 && num1 > 0 && num2 > 0) {
    if (num0 + num1 <= num2 || num0 + num2 <= num1 || num1 + num2 <= num0) {
      alert("Triangle cannot be formed using those values");
    } else {
      alert("Isosceles triangle");
    }
  } else {
    alert("The values of a triangle have to be greater than 0");
  }
};
// --------------End of the isosChecker function--------------------------------
// --------------Start of Scalene function ------------------------------------
var scalChecker = function(num0, num1, num2) {
  //condition to check if all entries are not matching to be on the main function
  if (num0 > 0 && num1 > 0 && num2 > 0) {
    if (num0 + num1 > num2 || num0 + num2 > num1 || num1 + num2 > num0) {
      alert("Scalene Triangle");
    } else {
      alert("Not a triangle");
    }

  } else {
    alert("The value of a triangle can only be greater than 0");
  }
};
// --------------End of the Scalene function------------------------------------
//------------------------------------------------------------------------------
//-----Content changed on 30/11/12 ---------------------------------------------
//iSide is the main function for user input from UI directly.
var iSides = function() {

  var num0 = document.getElementById('a').value;
  var num1 = document.getElementById('b').value;
  var num2 = document.getElementById('c').value;


  // Only number will be captured check if its greater than 0==================
  if (num0 > 0 && num1 > 0 && num2 > 0) {
    //Below will be values greater than 0
    if (num0 === num1 && num2 === num0 && num1 === num2) {
      // All sides have to be similar for it to be an equilateral triangle
      alert("Equilateral Triangle");
    } else if (num0 == num1 || num0 == num2 || num1 == num2) {
      // Aleast two sides have to be similar for it to be an Isosceles triangle
      //alert("Isosceles triangle");
      if (num0 + num1 <= num2 || num0 + num2 <= num1 || num1 + num2 <= num0) {
        alert("Triangle cannot be formed using those values");
      } else {
        alert("Isosceles Triangle");
      }
    } else //(num0 !== num1 && num0 !== num2 && num1 !== num2)
    {
      //For a triangle to be scalene triangle it has to meet the below
      //1. none of the sides is equal.
      //2. The sum of any two sides of the triangle must be greater than the third side.
      //alert("Scalene triangle");
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
//-----------------------End of iSide main function-------------------------
