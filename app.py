from flask import Flask, send_from_directory, request, render_template, send_file, redirect, url_for
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from werkzeug.wrappers import response  # comment this on deployment
from api.HelloApiHandler import HelloApiHandler
import os
import runpy
from io import BytesIO

app = Flask(__name__, static_url_path='')
CORS(app)  # comment this on deployment
# api = Api(app)


def run_model():
    # the model will run here.
    return

# @app.route("/", defaults={'path': ''})
# def serve(path):
#     return send_from_directory(app.static_folder, 'index.html')


# api.add_resource(HelloApiHandler, '/flask/hello')

@app.route('/input.html', methods=['GET', 'POST'])
@app.route('/input', methods=['GET', 'POST'])
def input():
    # if os.path.isfile('./static/path.jpg'):
    #     os.remove("./static/path.jpg")
    if os.path.isfile('data.mat'):
        os.remove("data.mat")
    if os.path.isfile('data.txt'):
        os.remove("data.txt")
    if request.method == 'POST':
        mat_file = request.files['matlab']
        text_file = request.files['text']
        if mat_file.filename != '':
            mat_file.save("data.mat")
        if text_file.filename != '':
            text_file.save("data.txt")
        # file = open('generate_copy.py', 'r').read()
        if mat_file.filename != '' and text_file.filename != '':
            run_model()  # the deep learning model will be run here
            # TODO: Save image and figure to specified location
            return redirect("http://localhost:3000/result", code=200)
    return render_template("input.html")


# @app.route('/data', methods=['GET'])
# def data():
#     file = response.files[0]
#     path = "static/data.mat"
#     return send_file(path, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
