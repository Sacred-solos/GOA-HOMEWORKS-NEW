const carInfo = {
    name: "Mercedes",
    model: "Benz",
    years: 2010,
    color: "Red",
    engine: "OM 656",
    carInfoTogether: function(){
        console.log(carInfo.name + ' ' + carInfo.model + ' ' + carInfo.years + ' ' + carInfo.color + ' ' + carInfo.engine)
    }
}
console.log(carInfo.carInfoTogether())