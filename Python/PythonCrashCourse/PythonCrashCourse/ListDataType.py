
#List dataType

myList = ["James","John","Peter","Jane"]
print(myList)
#Accessing the list items
results = myList[3]
print(results)

#Change value of item
myList[2] = "Mattew"
print(myList)

#size of the list
length = len(myList)
print(length)

#loop 
for i in myList:
    print(i)

#Adding item to a list
myList.append("Tere")
print(myList)

#Remove item
myList.remove('Mattew')
print(myList)