a= int(input("put in length of first wall of triangle: "))
b=int(input("put in length of second wall of triangle: "))
c=int(input("put in length of third wall of triangle: "))


def triangle(x,y,z):
  if (a+b>c and a+c>b and a<b+c ):
        print("It is a triangle")
    
  else:
     print("It is not a triangle")

triangle(a,b,c)