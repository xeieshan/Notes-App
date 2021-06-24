const utils = require('../utils.js');
const chalk = require('chalk');

const square = function(x) {
    return x * x
}
const squarenew = (x) => {
    return x * x;
}
const squarenew1 = (x) => x * x;
// utils.log(chalk.white.bgMagentaBright(square(5)));
// utils.log(chalk.blueBright.bgGreenBright(squarenew(25)));
// utils.log(chalk.magentaBright(squarenew1(125)));

const event = {
    name: 'Birthday Party',
    guestList : ['Zeeshan', 'Babar'],
    printGuestList() {
        utils.log(chalk.white.bgMagentaBright('Guest List for ' + this.name + ': '))
        this.guestList.forEach(function(item,i){
            utils.log(chalk.white.bgMagentaBright(i + '. ' + item + ' is attending.'))
        })
    }
}
event.printGuestList();