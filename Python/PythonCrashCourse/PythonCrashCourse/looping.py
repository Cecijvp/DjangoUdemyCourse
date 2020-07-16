
#while loop

n = 50
while n > 20:
    print(n)
    n -=5

#nested loop
A = [1,2]
B = [10,5,8,9,20]
C=[]

for x in A:
    for y in B:
        z = x*y
        C.append(z)
print(C)        

