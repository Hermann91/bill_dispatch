from flask import Flask
from flask_script import Manager

app = Flask(__name__)
manager = Manager(app)

from app.controller import api_file_processing
from app.blueprints import payment_processing
