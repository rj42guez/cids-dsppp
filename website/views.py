from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('about')
def about():
    return render_template("about.html")

@views.route('programs')
def programs():
    return render_template("programs.html")

@views.route('members')
def members():
    return render_template("members.html")

@views.route('public-policy-presentations')
def publicpolicypresentations():
    return render_template("public-policy-presentations.html")