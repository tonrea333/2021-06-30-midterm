// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘












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
