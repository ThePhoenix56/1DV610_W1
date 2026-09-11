const readLine = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readLine.createInterface({ input, output });
const changes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
const test = [];

function totalSales(totalAmount, paidAmount) {

    if (paidAmount >= totalAmount) {
        totalChange = paidAmount - totalAmount;
        for (const change of changes) {
            while (totalChange >= change) {
                totalChange -= change;
                test.push(`${Math.floor(change)} kr`);
            }
        }
        console.log('Your change is: ' + test.join(', '));
    }

    else {
        return console.log(`You havent paid enough. You have to pay ${Math.abs(paidAmount - totalAmount)} kr.`)
    }

}

rl.question('How much has the customer bought for? ', (answer) => {
    var customerShop = parseInt(answer);
    rl.question('How much have you paid? ', (answer) => {
        totalSales(customerShop, answer)

        rl.close()
    })
})