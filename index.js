const readLine = require('node:readline')
const {stdin: input, stdout: output} = require('node:process')
const rl = readLine.createInterface({input, output})

function totalSales(totalAmount, paidAmount){
     
    if(paidAmount >= totalAmount){

        return console.log( `Your change is: ${paidAmount - totalAmount} kr.`)

    } else {
        return console.log(`You havent paid enough. You have to pay ${Math.abs(paidAmount - totalAmount)} kr.`)
    }

}
rl.question('How much has the customer bought for?', (answer) => {
    var customerShop = answer;
    rl.close()
})

rl.question('How much have you paid? ', (answer) => {
    totalSales(customerShop, answer )

    rl.close()
})
