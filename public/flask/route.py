from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import numpy as np
import config
import pickle



crop_recommendation_model_path = './RandomForest.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

def weather_fetch(city_name):

    api_key = config.weather_api_key
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None


app = Flask(__name__)
CORS(app)

@app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    if request.method == 'POST':

        data =  request.get_json()
        N = int(data['nitrogen'])
        P = int(data['phosphorus'])
        K = int(data['potassium'])
        ph = float(data['ph'])
        rainfall = float(data['rainfall'])

        
        city = data["city"]
       
        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
            my_prediction = crop_recommendation_model.predict(data)
            final_prediction = my_prediction[0]

            return jsonify({'prediction':final_prediction})
            

        else:
            return jsonify({'error':'Try Again'})
           

if __name__ == '__main__':
    app.run(debug=True)