from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        return render_template("greet.html", name=request.form.get("name", "world"))


# @app.route("/")
# def index():
#     return render_template("index.html")


# @app.route("/greet", methods=["POST"])
# def greet():
#     return render_template("greet.html", name=request.form.get("name", "world"))


# http://127.0.0.1:5000/?name=Michael add on  the /... part and it dynamically updates name.
#  so we make a /greet to essentially do that for us.

# request.args - get
# request.forms - post
