#Dictionaries

myNames = {"ja": "james", "jo": "John", "pe":"Peter", "jan": "Jane"}
print(myNames)

#Access items
result = myNames["jo"]
print(result)

#Change value

myNames["jan"] = "Janice"
print(myNames)

#Adding Items
myNames["lu"] = "Luna"
print(myNames)

#Remove item
myNames.pop("jo")
print(myNames)

#Loop
for d in myNames:
    print(myNames[d])