const readLine = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readLine.createInterface({ input, output });
const changes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
const products = [
    {
        name: 'apple', price: 10
    },
    {
        name: 'banana', price: 15
    },
    {
        name: 'milk', price: 25
    }
]
const history = []

function totalSales(totalAmount, paidAmount) {

    var totalArray = [];
    if (paidAmount >= totalAmount) {
        totalChange = paidAmount - totalAmount;
        for (const change of changes) {
            while (totalChange >= change) {
                totalChange -= change;
                totalArray.push(`${Math.floor(change)} kr`);
            }
        }
        console.log('Your change is: ' + totalArray.join(', '));
    }

    else {
        return console.log(`You havent paid enough. You have to pay ${Math.abs(paidAmount - totalAmount)} kr.`)
    }

}

rl.question(`Vad vill du göra?:
    [1] Nytt köp
    [2] Visa historik
    [3] Avsluta
    Mata in svar här: `, (answer) => {
    switch (answer) {
        case 1:

            break;
        case 2:

            break;
        case 3:
            break;
        default:
            break;
    }

})

/*
rl.question(`What do you want to buy? The products that you can currently buy are: ${products.name}`, (answer) => {
    var customerShop = parseInt(answer);
    rl.question('How much have you paid? ', (answer) => {
        totalSales(customerShop, answer)

        rl.close()
    })
})
    */