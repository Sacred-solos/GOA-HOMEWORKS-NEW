function deposit(){
    let amount = document.getElementById("amount").value;
    if(amount == ""){
        window.alert("Please enter an amount of money you want to deposit!")
    }
    let currentBalance = parseFloat(document.getElementById('balance').textContent);
    let newBalance = + currentBalance + parseFloat(amount);

    document.getElementById('balance').textContent = newBalance;
    document.getElementById('amount').value = "";
}
function withdraw(){
    let amount = document.getElementById("amount").value;
    if(amount == ""){
        window.alert("Please enter an amount of money you want to withdraw!")
    }

    let currentBalance = parseFloat(document.getElementById("balance").textContent);
    let newBalance =  currentBalance - parseFloat(amount);

    document.getElementById('balance').textContent = newBalance;
    document.getElementById('amount').value = "";
    
    if(newBalance < 0){
        window.alert("You are trying to withdraw more than you have in your balance.");
    }
}

// davaleba 3
const personInfo = {
    name: "დათო",
    lastname:"გრძელიშვილი",
    age: 20,
}
console.log(personInfo)
function info(){
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");

    p1.textContent = "Nikolozi"
    p2.textContent = "Popkhadze"
    p3.textContent = 15
}