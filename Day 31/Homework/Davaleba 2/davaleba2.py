print("Nikas bank")
deposit = int(input("Enter deposit amount: "))
withdraw = int(input("Enter amount of money you will be withdrawing: "))
if deposit<withdraw:
    print("You do not have that amount of money.")
else:
    print(str(deposit-withdraw) +"$ are left in your account")