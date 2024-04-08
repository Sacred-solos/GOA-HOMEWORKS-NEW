
function ageCheck(a,b,c,d){
    const operator = b > a
    const secondOperator = a > c
    const thirdOperator = a == d
    console.log(operator,secondOperator,thirdOperator)
}
ageCheck(10,12,15,20)