import re

textSample = 'Women born in the 80s are generally cool'
pattern = '^Women'
results = re.match(pattern,textSample)
if results:
    print('Pattern found')
else:
    print('Pattern not found')