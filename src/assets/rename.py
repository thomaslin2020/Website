import os
import re


def atoi(text):
    return int(text) if text.isdigit() else text


def natural_keys(text):
    return [atoi(c) for c in re.split(r'(\d+)', text)]


directory = '/Users/thomaslin/Downloads/2020 website/untitled folder'
fs = os.listdir(directory)
fs = [i for i in fs if not i.endswith('.DS_Store') and not i.endswith('.py')]
for i in fs:
    dy = os.path.join(directory, i)
    data = os.listdir(dy)
    data.sort(key=natural_keys)
    data = [i for i in data if not i.endswith('.DS_Store')]
    print(data)
    num = [str(d) + '.jpg' for d in range(1, len(data) + 1)]
    for j, k in zip(data, num):
        os.rename(os.path.join(dy, j), os.path.join(dy, k))

    print(num)
