# app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the saved model
model = joblib.load('recommendation_model.pkl')

@app.route('/api/assess', methods=['POST'])
def assess():
    data = request.json
    skills = [data['skill1'], data['skill2'], data['skill3']]
    skills = np.array(skills).reshape(1, -1)
    
    # Predict recommended course
    recommended_course = model.predict(skills)
    
    return jsonify({'recommended_courses': recommended_course.tolist()})

if __name__ == '__main__':
    app.run(port=5001)
