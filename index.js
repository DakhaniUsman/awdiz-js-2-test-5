// Question 1 : Convert Roman Numeral to Integer

// let input = "MCMXCIV";
// let input ="IX";
// let input = "XII"


const RomanToInterger = (input) => {
  let roman = {
    I: 1,
    V: 5,
    X : 10,
    C : 100,
    M : 1000
  };

  let sum = roman[input[0]];


  for (let i = 0 ; i < input.length - 1; i ++){

    console.log(input[i],roman[input[i]])

    
    
    if (roman[input[i]] < roman[input[i + 1]]){
        console.log(roman[input[i]] < roman[input[i + 1]],"if")
       sum-= roman[input[i + 1]];
    }
    else{
        console.log(true,"else")
        console.log(roman[input[i]], roman[input[i+1]])  
        sum+=  roman[input[i + 1]];
        console.log(sum)
    }


  }
  sum= Math.abs(sum)

  return sum;

};

// console.log(RomanToInterger(input));

// Question 2 : move all zeros to the end

// let array = [0,1,0,3,12];
// let array = [0,0,1,0,5];
let array = [4, 2, 0, 0, 1];

const ZerosToEnd = (array) => {
  let zeroarray = [];
  let nonzeroarray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      zeroarray.push(array[i]);
    } else {
      nonzeroarray.push(array[i]);
    }
  }
  // console.log(zeroarray,nonzeroarray)
  let output = [...nonzeroarray,...zeroarray];

  // console.log(output)
  return output;
};

// console.log(ZerosToEnd(array));

// Question 3 : Generate all substrings of a given string

let string = "abc";
// let string = "dog";
// let string = "xy";

// a ab abc

const Substrings = (string) => {
  let word = "";
  let output = [];

  for (let i = 0; i < string.length; i++) {
    // console.log(string[i],"outer");

    word += string[i];
    output.push(word);

    for (let j = i + 1; j < string.length; j++) {
      // console.log(string[i],string[j]);

      word += string[j];
      output.push(word);
    }

    word = "";

    // console.log(output);
  }

  return output;
};

// console.log(Substrings(string));
