from flask import Flask
from flask_cors import CORS, cross_origin
import markov_nuzhdik, random_nuzhdik

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/neuro')
@cross_origin()
def neuronuzhdik():
    text = markov_nuzhdik.get()
    return(text)

@app.route('/random')
@cross_origin()
def randomnuzhdik():
    text = random_nuzhdik.get()
    return(text)

if __name__ == '__main__':
    app.run()