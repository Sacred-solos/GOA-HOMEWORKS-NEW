maxlist = [1,2,3,4,5,6,7,8,9]
maxvalue = list[0]
length = len(list)
for i in maxlist:
    if i > maxvalue:
        maxvalue=i

maxlist.remove(maxvalue)

print(maxlist)
