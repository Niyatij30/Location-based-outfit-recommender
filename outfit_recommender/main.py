from flask import Flask,redirect,url_for,render_template
app=Flask(__name__)
@app.route('/')
def welcome():
    return render_template("index.html")

@app.route('/pass/<int:score>')
def success(score):
    return "<html><body><h1>The result is pass</h1></body></html>"

@app.route('/fail/<int:score>')
def fail(score):
    return "the student has failed and the score is" + str(score)

@app.route('/result/<int:marks>')
def resultcheck(marks):
    if(marks>50):
        result='pass'
    if(marks<50):
        result='fail'
    return(redirect(url_for(result,score=marks)))

if __name__=="__main__":
    app.run(debug=True)
