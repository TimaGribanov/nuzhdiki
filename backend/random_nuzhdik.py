import json, random

def get():
    data = json.load(open('./nuzhdiki.json'))
    length = len(data)
    rnd = random.randint(0, length - 1)
    return data[rnd]['text']