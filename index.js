

function totalSales(totalAmount, paidAmount){
     
    if(paidAmount >= totalAmount){

        return console.log( `Your change is: ${paidAmount - totalAmount}`)

    } else {
        return console.log(`You havent paid enough. You have to pay ${Math.abs(paidAmount - totalAmount)}`)
    }

}


totalSales(51, 50)