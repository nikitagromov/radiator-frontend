from flask import Flask, Response

import json

app = Flask(__name__)

@app.route("/api/file")
def hello():
    with open('example.json', 'r') as file:
        result = file.read()
    #print(result)
    resp = Response(result)
    print(resp)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

if __name__ == "__main__":
    app.run(debug=True)
