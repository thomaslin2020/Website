import torch
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from model_imports import *

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(
    DEBUG=True,
    TEMPLATES_AUTO_RELOAD=True
)

CORS(app, resources={r'/*': {'origins': '*'}})

COURSES = [
    {
        'title': 'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript ',
        'author': 'David Herman',
        'paperback': True
    },
    {
        'title': 'JavaScript: The Good Parts',
        'author': 'Douglas Crockford',
        'paperback': False
    },
    {
        'title': 'Eloquent JavaScript: A Modern Introduction to Programming',
        'author': 'Marijn Haverbeke',
        'paperback': True
    }
]

models = {}


def load_models():
    global models
    models['mnist'] = {}
    models['mnist']['cnn'] = BatchnormCNN()


load_models()


@app.route('/predict/mnist/')
@app.route('/predict/mnist/<model>', methods=['GET', 'POST'])
def mnist(model=None):
    if request.method == 'GET':
        return jsonify({'message': 'Upload your MNIST image'})
    if request.method == 'POST':
        print(request.files)
        if 'file' not in request.files:
            return 'file not uploaded'
        img_bytes = request.files['file'].read()
        prediction, confidence = models['mnist'][model].get_mnist_prediction(image_bytes=img_bytes)
        return jsonify({'class': prediction, 'confidence': confidence})


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        img_bytes = request.files['file'].read()
        return jsonify({'class': models['mnist']['cnn'].get_mnist_prediction(image_bytes=img_bytes)})


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return render_template('mnist/predict.html', value='hi')
    if request.method == 'POST':
        print(request.files)
        if 'file' not in request.files:
            print('file not uploaded')
            return
        img_bytes = request.files['file'].read()
        prediction = models['cnn']['mnist'].get_mnist_prediction(image_bytes=img_bytes)
        return render_template('mnist/result.html', number=prediction)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


@app.route('/courses', methods=['GET'])
def all_courses():
    return jsonify({
        'status': 'success',
        'courses': COURSES
    })


if __name__ == '__main__':
    app.run()
