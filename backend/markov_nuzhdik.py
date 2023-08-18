import markovify

def get():
    text = open('nuzhdiki.txt', encoding='utf-8').read()
    text_model = markovify.Text(text, state_size=1)
    return text_model.make_sentence()