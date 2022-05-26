/**
 * @file A file that connects everything to index.js.
 * @author Noah Pace
 */

const ui = require('./ui');
const inq = require('inquirer');

async function MainMenu() {
    while(true) {
        console.clear();
        ui.PrintMainMenu();
        const sel = await inq.prompt([{
            name: 'response',
            type: 'list',
            pageSize: 2,
            message: 'What would you like to do:',
            choices: ['New Game', 'Exit Game']
        }]);
        if (sel.response === 'New Game') {
            
        } else {return}
    }
}

module.exports = {MainMenu}