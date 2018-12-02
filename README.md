# Francis Thande Karagu
#### This my triangle checker program, Friday,30th November,2018
#### By **{Francis T Karagu}**

## Description
The triangle checker program is designed to meet the objectives of the user as well as monitor / evaluate my understanding of my second week of training. As for the user objectives they are:

* For an equilateral triangle, all sides must be equal.
* For an isosceles triangle, two sides are exactly equal.
* For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.
* Most importantly, if the sum of any two sides of the triangle is equal to or less than the third remaining side, then a triangle CANNOT be formed using those values. NO triangle at all.

## Setup / Installation Requirements
* Requires a Web browser
* May require the user to have a github account to access it

## Behaviour Driven Development
BDD is more documenting the behaviour of the program before starting to write code. For triangle checker program below are steps.

### Specification
* For the program there is 1 functions iSides
* This will be the main function.
* Capture the user input.
* Check if the values captured are greater then 0

    * If greater than 0

		  * Check if all sides are the same. If so it's Equilateral.
		  * Check if two sides are the same. Then check
			       * If the sum of any two sides of the triangle is equal to or less than the third remaining side, then a triangle CANNOT be formed using those values
			       * Otherwise it's an Isosceles
		  * Check none of the sides are the same. Then check
			* The sum of any two sides of the triangle must be greater than the third side. Then it's a Scalene.
			* Otherwise NO triangle at all

* If not greater than 0, Display message "The values of a triangle have to be greater than 0


## Known Bugs
Nil at the moment.

## Technologies Used
I have used HTML, CSS and JavaScript to develop the triangle checker program. This was typed using Atom text-editor

## Support and contact details
In case of any problems reach me through my email:fkaragu@gmail.com

### License
Copyright (c) {2018} **{Francis Thande Karagu}**
Permission is hereby granted, free of charge, to any person willing to obtain a copy of this program for personal use. However if the program will be used for commercial gain then a royalty fee will have to be paid to the author of the program.
