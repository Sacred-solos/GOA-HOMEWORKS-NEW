const object = {
    name: 'Nika',
    email:'thesacredninja129@gmail.com',
    age:14,
    work:{
        workTime:'8 hours',
        money:'10000$'
    }

}
console.log(object,object.work)

object.work.money = "15000$"

console.log(object.work.money)