from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/dsppp-at-a-glance')
def about():
    return render_template("about.html")

@app.route('/events-2024')
def programs_2024():
    return render_template("programs-2024.html")

@app.route('/events-2025')
def programs_2025():
    return render_template("programs-2025.html")

@app.route('/community-dspptwg')
def members_dspptwg():
    return render_template("members-dspptwg.html")

@app.route('/community-trp')
def members_trp():
    return render_template("members-trp.html")

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