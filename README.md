# Midterm

You'll have all day to work on the midterm. 

Once you're done, submit it on CodeGrade, send a message to Mesi and Alex, then feel free to head out until tomorrow!

## Rules

* No using the internet
* No using regular expressions
* Referring to notes and previous solutions is allowed

## Problems

### Problem 1: `ageToAbilities`

Write a function, `ageToAbilities`, that takes a person's age and returns a message of their abilities according to the table below:

```
┌──────────┬────────────────────────────────────┐
│ age      │ message                            │
├──────────┼────────────────────────────────────┤
│ under 16 │ 'You can't drive.'                 │
│ 16 to 17 │ 'You can drive but not vote.'      │
│ 18 to 24 │ 'You can vote but not rent a car.' │
│ 25 plus  │ 'You can do pretty much anything.' │
└──────────┴────────────────────────────────────┘
```

**Examples**
```
ageToAbilities(10) => 'You can't drive.'
ageToAbilities(25) => 'You can do pretty much anything.'
```

### Problem 2: `evenLengthedStrings`

Write a function, `evenLengthedStrings`, that takes an array of
and returns a new array only containing the strings whose lengths
are even.

**Examples**
```
evenLengthedStrings(['now', 'this', 'is', 'podracing']) 
=> ['this', 'is']

evenLengthedStrings(['hello', 'there'])
=> []

evenLengthedStrings(['math', 'is', 'fun'])
=> ['math', 'is']
```

### Problem 3: `countBs`

Write a function, `countBs`, that takes in an array of grades and returns the
quantity of Bs (from 80 - 89 inclusive).

***Examples**
```
countBs([90, 50, 63, 87, 100, 83, 93, 81, 76, 79, 0]);
=> 3

countBs([89, 80, 106, 81, 100, 87, 110]);
=> 4
```

### Problem 4: `lastIndexOfPunctuation`

Write a function, `lastIndexOfPunctuation`, that takes in a string and returns
the index of the last punctuation (defined as a period, question mark, or
exclamation mark) found in the given string. If the string contains no punctuation,
the function should return -1.

**Examples**
```
lastIndexOfPunctuation('no. I do not!')
=> 12

lastIndexOfPunctuation('...')
=> 2

lastIndexOfPunctuation('I have no punc and I cannot lie') 
=> -1
```

### Problem 5: `divisbles`

Write a function, `divisbles`, that takes in two arrays of numbers of equal
length and returns a boolean array of the same length indicating whether each
value in the first array is divisble by its respective number in the second array.

**Examples**
```
divisibles([4], [2])
=> [true]

divisibles([4], [3])
=> [false]

divisibles([4, 4], [2, 3])
=> [true, false]

divisibles([1, 2, 3, 4], [2, 2, 2, 2])
=> [false, true, false, true]

divisibles([2, 4, 6, 8], [3, 2, 3, 2])
=> [false, true, true, true]
```

### Problem 6: `getLetters`

Write a function, `getLetters` that takes in an array of strings and an index.
The the function should return a string that consists of each one letter from
each string at the given index.

If a character does not at the index in a particular string, insert a dash instead.

**Examples**
```
getLetters(['hello', 'there'], 0)
=> 'ht'

getLetters(['hello', 'there'], 1)
=> 'eh'

getLetters(['how', 'is', 'it', 'going'], 2)
=> 'w--i'
```

### Problem 7: `getCenturies`

Write a function, `getCenturies`, that given an array of years, returns the
century that those years are in.

```
getCenturies([1483, 1980, 1635, 1531, 1776, 1305])
=> ['15th', '20th', '17th', '16th', '18th', '14th']

getCenturies([5, 63, 220, 501]);
=> ['1st', '1st', '3rd', '6th']
```

### Extra credit: `gridSum`

Write a function, `gridSum`, that takes an array of arrays of numbers, a start
row, a start column, an end row, and an end column. The function should return the sum of all the numbers in the given row range and column range (inclusive).

Note: we'll consider the first row to be row 0 (same with columns)

**Examples**
```
gridSum(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    0,
    0,
    1,
    1
)
=> 1 + 2 + 4 + 5 => 12

gridSum(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    1,
    0,
    1,
    2
)
=> 4 + 5 + 6 => 15

gridSum(
    [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ],
    0
    0,
    2,
    0
)
=> 10 + 40 + 70 => 120
```



