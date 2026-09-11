const readLine = require('node:readline')
const {stdin: input, stdout: output} = require('node:process')
const rl = readLine.createInterface({input, output})

function totalSales(totalAmount, paidAmount){
     
    if(paidAmount >= totalAmount){

        return console.log( `Your change is: ${paidAmount - totalAmount}`)

    } else {
        return console.log(`You havent paid enough. You have to pay ${Math.abs(paidAmount - totalAmount)}`)
    }

}


rl.question('How much have you paid?', (answer) => {
    totalSales(100, answer )

    rl.close()
})
