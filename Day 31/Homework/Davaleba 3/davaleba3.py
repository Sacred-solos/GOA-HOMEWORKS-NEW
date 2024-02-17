import random
p1 =str(input("Player 1: "))
p2= str(input("Player 2: "))
dice= [1,2,3,4,5,6]
n1 = random.choice(dice)
n2 = random.choice(dice)
if n1>n2:
    print(p1, "Wins!")
elif n1==n2:
    print("Tie!")
elif n1<n2:
    print(p2, "Wins!")
