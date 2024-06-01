function isTeen(age,hasPermission){
    if((age<18 && hasPermission==false) || (age>18 && hasPermission == true)){
        print(true)
    }
    else{
        print(false)
    }
}