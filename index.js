//Work in progess
//Exercise 1 Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.
const total = function(a, b) {
  if (a == b) {
      console.log((a + b) * 3 )
  } else {
      console.log(a + b)
  }
}
total(2, 1)
//Exercise 2 Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.
const checkEquality = function(a, b) {
    if ((a == 50 || b == 50) || (a + b == 50) ) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkEquality(26, 25)
//Exercise 3 Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string.

//Exercise 4 Create a function to find and return the largest of three given integers.!!!!!!
/*const largest = function(a, b, c, d) {
    for (let i = 0; i < largest.length; i++) {
        console.log(i)
        
    }

}
largest(10, 11, 12, 13)*/
// Exercise 5 Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.
const checkRange = function(a, b) {
    if ((a && b >= 40) && (a && b <= 60 ) || (a && b >= 70) && (a && b <= 100)  ) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkRange(45,60)
// Exercise 6 Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.

const string = "SomeText";
const numberOfCopies = 3;


const copyString = function(a, b) {
    const copy = a.repeat(b);
    console.log(copy);
}

copyString(string, numberOfCopies);
// Exercise 7 Create a function to display the city name if the string begins with "Los" or "New". Pass the city name as a parameter. Return false if they start with a different string.
const cityName = "New York"; 

const checkCityName = function (name) {
    const cityNameContains = name.slice(0, 3); 
    if (cityNameContains.includes("New") || cityNameContains.includes("Los")) {
        console.log(true);
    } else {
        console.log(false)
    }
}
checkCityName(cityName);

// Exercise 8 Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
// Exercise 9 Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn't.
// Exercise 10 Create a function to test if an array of length 2 DOES NOT contain 1 or 3. Return true if it doesn't, false if it does.
// Exercise 11 Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.

/* Exercise 12 Create a function to find the types of a given angle:
   Exercise Acute angle ⇒ between 0 and 90 degrees. Return acute.
   Exercise Right angle ⇒ 90 degree. Return right
   Exercise Obtuse angle ⇒ between 90 and 180. Return obtuse
   Exercise Straight angle ⇒ 180 degrees. Return straight */
const angleValue = 180;
const typeOfAngle = function(a) {
    const angleValue = a;
    if (angleValue >= 0 && angleValue < 90) {
        console.log(angleValue + " The angle is acute")
    } else if ( angleValue == 90) {
        console.log(angleValue + " The angle is right")
    } else if (angleValue > 90 && angleValue <= 180) {
        console.log(angleValue + " The angle is obtuse")
    } else if (angleValue > 180) {
        console.log(angleValue + " The angle is straight")
    }
}
typeOfAngle(angleValue);
// Exercise 13 Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter
// Exercise 14 Create a function to find and return the largest even number from an array of integers that is passed a parameter.
// Exercise 15 Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. Return true if that's the case, return false if it's not.
const intA = -10; 
const intB = -15;
const checkIntSign = function (a, b) {
    const intA = Math.sign(a); 
    const intB = Math.sign(b);
    if (intA + intB == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkIntSign(intA, intB)
// Exercise 16 Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter.
// Exercise 17 Create a function to calculate the sum of two integers (passed as parameters). If the sum is in the 50-80 range, return 65, otherwise, return 80.
