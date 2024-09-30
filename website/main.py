from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/programs')
def programs():
    return render_template("programs.html")

@app.route('/members')
def members():
    return render_template("members.html")

@app.route('/public-policy-presentations')
def publicpolicypresentations():
    return render_template("public-policy-presentations.html")

@app.route('/videos')
def videos():
    return render_template("videos.html")

if __name__ == '__main__':
    app.run(debug=True)