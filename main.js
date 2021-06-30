// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//properly returns abilities given ages
function ageToAbilities(age) {

    if (age < 16) {//if the age is less than do "a"
        let a = "You can't drive.";

        return a//return message

    } else if (age == 16 || age == 17) {//if age is equal to 16 or 17 do "b"
        let b = "You can drive but not vote.";

        return b//return message

    } else if (age >= 18 && age <= 24) {//if age is greater equal to than 18 and less than equal to 24 do "c"
        let c = "You can vote but not rent a car.";

        return c//return message

    } else if (age >= 25) {//if age is greater than equal to 25 do "d"
        let d = "You can do pretty much anything.";

        return d//return message
    }

}
//=========================================================

// returns only even lengthed strings

function evenLengthedStrings(strings) {
    let sum = 0;
    numbers = [];



    for (let i = 0; i < strings.length; i++) {
        strings.push(numbers);
        
        if (numbers % 2) {
            strings.splice();
            return string;

        }
    }



    //console.log(strings)
}

//==========================================================
//counts the number of Bs in the input array

function countBs(numberofBs) {
    console.log(numberofBs)
    let count = 0;
    for (let i = 0; i < numberofBs.length; i++) {//loops through looking for elements in array that are Bs
        if (numberofBs[0] >= 80 && numberofBs[0] <= 89) {
            numberofBs.shift();
            count = count + 1;
            console.log(count)
        } else if (numberofBs[0] < 80 || numberofBs[0] > 89) {//excludes grades that are not Bs
            numberofBs.shift();
        } else if ([""]) {//excludes and deletes empty spaces
            numberofBs.shift();
            console.log(numberofBs)
        }
        return count; //returns total number of Bs once loop has run length excluding and count non-Bs and Bs.
    }
}
//===============================================================
//returns the last index of punctuation in the given string
function lastIndexOfPunctuation(indexValue) {
    if (indexValue.unshift() === ".") {//checks to see if unshift(last element in string) is a puncuaction mark.
        for (let i = 0; i < indexValue.length; i++) {
            let count = -1;
            count = count + 1
            return count;
        }
    } else if (indexValue.unshift() === "?") {
        for (let i = 0; i < indexValue.length; i++) {
            let count = -1;
            count = count + 1
            return count;
        }
    } else if (indexValue.unshift() === "!") {
        for (let i = 0; i < indexValue.length; i++) {
            let count = -1;
            count = count + 1
            return count;
        }
    } else if (indexValue.unshift() === "...") {
        for (let i = 0; i < indexValue.length; i++) {
            let count = -1;
            count = count + 1
            return count;
        }

    } else {
        return -1
    }

}
//==============================================================
//returns an array of booleans indicating whether each number in the first array is divisble by its respective pair in the second array
function divisbles(array1, array2) {
    console.log(array1)
    console.log(array2)

    for (let i = 0; i < array1.length; i++) {//loops through length of array checking if index zero in array1 and array2 are divisible
        if (array1[0] % array2[0] == 0) {
            array1.shift();//shift index value zero out so loop can check if divisble or not again.
            array2.shift();
            return true;//if divisible return true
        } else if (array1[0] % array2[0] !== 0) {
            array1.shift();
            array2.shift();
            return false;//if not divisible return false
        }

    }
}
//=============================================================
//returns a string of one letter from each word in the given array at the given index
function getLetters(stringArray, arrayIndexValue) {

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[arrayIndexValue]) {

        }

        return stringArray.arrayIndexValue
    }

}
//===============================================================
//returns an array of centuries from an array of years
function getCenturies(year) {
    if (year >= 1 && year <= 199) {
        return "1st"
    } else if (year >= 200 && year <= 299) {
        return "2nd"
    } else if (year >= 300 && year <= 399) {
        return "3rd"
    } else if (year >= 400 && year <= 499) {
        return "4th"
    } else if (year >= 500 && year <= 599) {
        return "5th"
    } else if (year >= 600 && year <= 699) {
        return "6th"
    } else if (year >= 700 && year <= 799) {
        return "7th"
    } else if (year >= 800 && year <= 899) {
        return "8th"
    } else if (year >= 900 && year <= 999) {
        return "9th"
    } else if (year >= 1000 && year <= 1199) {
        return "11th"
    } else if (year >= 1100 && year <= 1199) {
        return "12th"
    } else if (year >= 1200 && year <= 1299) {
        return "13th"
    } else if (year >= 1300 && year <= 1399) {
        return "14rd"
    } else if (year >= 1400 && year <= 1499) {
        return "15th"
    } else if (year >= 1500 && year <= 1599) {
        return "16th"
    } else if (year >= 1600 && year <= 1699) {
        return "17th"
    } else if (year >= 1700 && year <= 1799) {
        return "18th"
    } else if (year >= 1800 && year <= 1899) {
        return "19th"
    } else if (year >= 1900 && year <= 1999) {
        return "20th"
    } else if (year >= 2000 && year <= 2199) {
        return "21th"
    } else if (year >= 2200 && year <= 2299) {
        return "22nd"
    }


    const centuries = [
        {
            first: "1st",
        },
        {
            second: "2nd",
        },
        {
            thrid: "3rd",
        },
        {
            fourth: "4th",
        },
        {
            fifth: "5th",
        },
        {
            sixth: "6th",
        },
        {
            seventh: "7th",
        },
        {
            eight: "8th",
        },
        {
            ninth: "9th",
        },
        {
            ten: "10th",
        },
        {
            eleven: "11th",
        },
        {
            twelve: "12th",
        },
        {
            thriteen: "13th",
        },
        {
            fourteen: "14th",
        },
        {
            fifteen: "15th",
        },
        {
            sixteen: "16th",
        },
        {
            sevententh: "17th",
        },
        {
            eightenth: "18th",
        },
        {
            ninetenth: "19th",
        },
        {
            twenty: "20th",
        },
        {
            twentyone:"21st"
        }
    ];

}
//==========================================================
//returns the sum of the grid (between the given cols / rows)
function gridSum(sumallNumbers){
    console.log(sumallNumbers)
}



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports = {
    ageToAbilities: isDef(typeof ageToAbilities) ? ageToAbilities : pass,
    evenLengthedStrings: isDef(typeof evenLengthedStrings) ? evenLengthedStrings : pass,
    countBs: isDef(typeof countBs) ? countBs : pass,
    lastIndexOfPunctuation: isDef(typeof lastIndexOfPunctuation) ? lastIndexOfPunctuation : pass,
    divisbles: isDef(typeof divisbles) ? divisbles : pass,
    getLetters: isDef(typeof getLetters) ? getLetters : pass,
    getCenturies: isDef(typeof getCenturies) ? getCenturies : pass,
    gridSum: isDef(typeof gridSum) ? gridSum : pass
};
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
