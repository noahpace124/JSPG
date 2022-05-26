/**
 * @file A file that contains all display functions.
 * @author Noah Pace
 */

function PrintMainMenu() {
    console.log(' - - - - - - - - - - - - -');
    console.log(' - - - - J S R P G - - - -');
    console.log(' - - M A I N - M E N U - -');
    console.log(' - - - - - - - - - - - - -');
}

function ClearScreen() {
    console.clear();
    console.log(' - - J R P G - -');
    console.log('');
}

module.exports = {PrintMainMenu, ClearScreen}