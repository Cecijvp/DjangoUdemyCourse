import re

pattern = '^b.....g$'
test_string = 'banking'
result= re.search(pattern,test_string)
if result:
    print('Search succesful')
else:
    print('search unsuccesful')
