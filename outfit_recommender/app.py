import pandas as pd
import pickle
from flask_cors import CORS
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
CORS(app)

# Load the model and encoders
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    with open('le_location.pkl', 'rb') as f:
        le_location = pickle.load(f)
    with open('le_gender.pkl', 'rb') as f:
        le_gender = pickle.load(f)
except FileNotFoundError as e:
    print("Model or encoder files not found. Please ensure the files exist.")
    raise e

# Load the dataset for recommendations
try:
    df = pd.read_csv('Corelated.csv')
except FileNotFoundError as e:
    print("File not found. Please ensure the file exists.")
    raise e

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])

def predict():
    print("not working")
    data = request.get_json()
    print(data)
    location = data['location']
    gender = data['gender']

    if location in le_location.classes_ and gender in le_gender.classes_:
        location_encoded = le_location.transform([location])[0]
        gender_encoded = le_gender.transform([gender])[0]
        print(location_encoded,"location_encoded")
        print(gender_encoded,"generenco")
        articles = df[(df['location_encoded'] == location_encoded) & (df['gender_encoded'] == gender_encoded)]
        recommended_articles = articles.drop(['location','gender','location_encoded', 'gender_encoded'], axis=1)
        
        return recommended_articles.head().to_json(orient='records')
    else:
        return jsonify({'error': 'Invalid location or gender'})

if __name__ == '__main__':
    app.run(debug=True)

