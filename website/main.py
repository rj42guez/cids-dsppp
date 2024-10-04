from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/dsppp-at-a-glance')
def about():
    return render_template("about.html")

@app.route('/events')
def programs():
    return render_template("programs.php")

@app.route('/community')
def members():
    return render_template("members.html")

@app.route('/research-corner')
def publicpolicypresentations():
    return render_template("public-policy-presentations.html")

@app.route('/proceedings')
def videos():
    return render_template("videos.html")

@app.route('/chat-with-us')
def contact():
    return render_template("chat-with-us.html")

if __name__ == '__main__':
    app.run(debug=True)