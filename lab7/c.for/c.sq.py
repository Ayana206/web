import math
a = int(input())
b = int(input())

for x in range (a,b+1):
    if int(math.sqrt(x))==math.sqrt(x):
        print(x,end=" ")