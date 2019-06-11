from flask import Flask, render_template
app = Flask(__name__)
#creating an instance of the Flask class and calling it app


@app.route("/")
def home():
	return render_template("index.html")

@app.route("/about")
def about():
	return render_template("about.html")



if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT, debug=True)
	#optional code, starts the Flask development server with specific host and port values taken from environment variables (defaulting to localhost:5555)