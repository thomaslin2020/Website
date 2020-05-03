import os
import re

def atoi(text):
    return int(text) if text.isdigit() else text

def natural_keys(text):
    return [ atoi(c) for c in re.split(r'(\d+)', text)]

directory = '/Users/thomaslin/Documents/GitHub/ridley-arts/src/assets/art_exhibition/phoenix/'
data = os.listdir(directory)
data.sort(key=natural_keys)
num = [str(i)+'.png' for i in range(1,len(data)+1)]
for i,j in zip(data,num):
    print(i,j)
    os.rename(directory+i,directory+j)

print(num)