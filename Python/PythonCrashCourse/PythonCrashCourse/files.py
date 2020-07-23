
#Reading files

myFile = open("textFile.txt", "r")
results = myFile.read()
print(results)
myFile.close 

#write empty file
myFile2 = open("anotherFile.txt", "w")
content = "This is a new file and i'm writting on it"
myFile2.write(content)
myFile2.close