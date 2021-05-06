# Start

from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/pga_app"
mongo = PyMongo(app)

@app.route("/")
def index():
   pga = mongo.db.pga.find_one()
   return render_template("index.html", pga=pga)

if __name__ == "__main__":
   app.run()