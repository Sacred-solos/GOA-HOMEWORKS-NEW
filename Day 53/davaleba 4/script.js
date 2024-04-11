//pirveli

const car = {
    name: "BMW",
    start: function (){
        console.log("Start")

    },
    break: function (){
        console.log("Break")

    }

}

//meore

const personInfo={
    name:"John",
    surName:"Doe",
    fullName:function(){
        console.log(this.name+" "+this.surName)
    }
}