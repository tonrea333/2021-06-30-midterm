const { expect } = require('@jest/globals');
const expectExport = require('expect');
const {
    ageToAbilities,
    evenLengthedStrings,
    countBs,
    lastIndexOfPunctuation,
    divisbles,
    getLetters,
    getCenturies,
    gridSum
} = require('./main.js');

describe('ageToAbilities', () => {
    it('properly returns abilities given ages', () => {
        expect(ageToAbilities(3)).toBe('You can\'t drive.');
        expect(ageToAbilities(15)).toBe('You can\'t drive.');
        expect(ageToAbilities(16)).toBe('You can drive but not vote.');
        expect(ageToAbilities(17)).toBe('You can drive but not vote.');
        expect(ageToAbilities(18)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(19)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(24)).toBe('You can vote but not rent a car.');
        expect(ageToAbilities(25)).toBe('You can do pretty much anything.');
        expect(ageToAbilities(50)).toBe('You can do pretty much anything.');
        expect(ageToAbilities(100)).toBe('You can do pretty much anything.');
    });
});

describe('evenLengthedStrings', () => {
    it('returns only even lengthed strings', () => {
        expect(evenLengthedStrings([])).toStrictEqual([]);
        expect(evenLengthedStrings(['a'])).toStrictEqual([]);
        expect(evenLengthedStrings(['test'])).toStrictEqual(['test']);
        expect(evenLengthedStrings(['hello', 'there'])).toStrictEqual([]);
        expect(evenLengthedStrings(['now', 'this', 'is', 'podracing']))
            .toStrictEqual( ['this', 'is']);
        expect(evenLengthedStrings(['math', 'is', 'fun']))
            .toStrictEqual(['math', 'is']);
    });
});

describe('countBs', () => {
    it('counts the number of Bs in the input array', () => {
        expect(countBs([])).toBe(0);
        expect(countBs([80])).toBe(1);
        expect(countBs([80, 90])).toBe(1);
        expect(countBs([80, 90, 89])).toBe(2);
        expect(countBs([90, 50, 63, 87, 100, 83, 93, 81, 76, 79, 0])).toBe(3);
        expect(countBs([89, 80, 106, 81, 100, 87, 110])).toBe(4);
    });
});

describe('lastIndexOfPunctuation', () => {
    it('returns the last index of punctuation in the given string', () => {
        expect(lastIndexOfPunctuation('')).toBe(-1);
        expect(lastIndexOfPunctuation('!')).toBe(0);
        expect(lastIndexOfPunctuation('?')).toBe(0);
        expect(lastIndexOfPunctuation('.')).toBe(0);
        expect(lastIndexOfPunctuation('...')).toBe(2);
        expect(lastIndexOfPunctuation('no. I do not!')).toBe(12);
        expect(lastIndexOfPunctuation('I have no punc and I cannot lie')).toBe(-1);
    });
});

describe('divisbles', () => {
    it(
        'returns an array of booleans indicating whether each number in the ' +
        'first array is divisble by its respective pair in the second array', 
        () => {
            expect(divisbles([], [])).toStrictEqual([]);
            expect(divisbles([4], [2])).toStrictEqual([true]);
            expect(divisbles([4], [3])).toStrictEqual([false]);
            expect(divisbles([4, 4], [2, 3])).toStrictEqual([true, false]);
            expect(divisbles([1, 2, 3, 4], [2, 2, 2, 2]))
                .toStrictEqual([false, true, false, true]);
            expect(divisbles([2, 4, 6, 8], [3, 2, 3, 2]))
                .toStrictEqual([false, true, true, true]);
        }
    );
});

describe('getLetters', () => {
    it(
        'returns a string of one letter from each word in the given array at ' +
        'the given index', 
        () => {
            expect(getLetters([], 0)).toBe('');
            expect(getLetters(['test'], 0)).toBe('t');
            expect(getLetters(['test'], 1)).toBe('e');
            expect(getLetters(['test'], 10)).toBe('-');
            expect(getLetters(['continue', 'testing'], 3)).toBe('tt');
            expect(getLetters(['hello', 'there'], 0)).toBe('ht');
            expect(getLetters(['hello', 'there'], 1)).toBe('eh');
            expect(getLetters(['how', 'is', 'it', 'going'], 2)).toBe('w--i');
        }
    );
});

describe('getCenturies', () => {
    it('returns an array of centuries from an array of years', () => {
        expect(getCenturies([1483, 1980, 1635, 1531, 1776, 1305]))
            .toStrictEqual(['15th', '20th', '17th', '16th', '18th', '14th']);
      
        expect(getCenturies([1888, 1153, 1299, 1043]))
            .toStrictEqual(['19th', '12th', '13th', '11th']);
      
        expect(getCenturies([2001,2010,2020,2016,2080,2063]))
            .toStrictEqual(['21st','21st','21st','21st','21st','21st']);
      
        expect(getCenturies([850, 973, 501, 737, 404, 666, 321]))
            .toStrictEqual(['9th', '10th', '6th', '8th', '5th', '7th', '4th']);       

        expect(getCenturies([1, 5, 9, 23, 63, 99, 105, 220, 280, 350, 376]))
            .toStrictEqual(['1st', '1st', '1st', '1st', '1st', '1st', '2nd', 
                            '3rd', '3rd', '4th', '4th']);
    });
});

describe('gridSum', () => {
    it('returns the sum of the grid (between the given cols / rows)', () => {
        expect(gridSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], 0, 0, 1, 1)).toBe(12);

        expect(gridSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], 0, 0, 2, 2)).toBe(45);

        expect(gridSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], 0, 0, 0, 0)).toBe(1);

        expect(gridSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], 1, 0, 1, 2)).toBe(15);

        expect(gridSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], 0, 0, 2, 0)).toBe(12);

        expect(gridSum([
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ], 0, 0, 1, 1)).toBe(120);

        expect(gridSum([
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ], 0, 0, 2, 2)).toBe(450);

        expect(gridSum([
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ], 0, 0, 0, 0)).toBe(10);

        expect(gridSum([
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ], 1, 0, 1, 2)).toBe(150);

        expect(gridSum([
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ], 0, 0, 2, 0)).toBe(120);
    });
});
