function isValidCoupon(couponCode,totalAmount){
         if(couponCode == "SALE" || couponCode == "BIGSALE"){
         console.log(totalAmount >= 50) 
}
        else{
           console.log(couponCode == "LILSALE" && totalAmount <= 50)
}
}
console.log(isValidCoupon("SALE",60))