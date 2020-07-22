import re

textExample = 'Men love to be in mens club for gentlemen'

pattern = "^Men.*men$"
result = re.search(pattern,textExample)

if result:
    print('Pattern found inside string')
else:
    print('Pattern not found in string')