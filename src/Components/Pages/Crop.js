import React, {useState} from "react";
// import { Form } from "react-router-dom";
import { getPrediction } from "../../config/apis";
import FormDropdown from "../Dropdown";
import './Crop.css'

import {cities, getCities} from '../Counties.js'

function Crop (){
    const [formOff, setFormOff] = useState(true)
    const [dataa, setData] = useState({})
    const [values, setValues] = useState(
        {
            country: "",
            city : "",
            nitrogen: "",
            phosphorus: "",
            potassium: "",
            rainfall: "",
            temperature: "",
            ph: ""
        }
    )





    const handleCountryInputChange = (value) => {
        setValues({...values, country: value})
    }
    const handleCityInputChange = (value) => {
        setValues({...values, city: value.replace(" ", "")})
    }
    // const handleCountryInputChange = (event) => {
    //     console.log(event.target.value)
    //     setValues({...values, country: event.target.value})
    // }

    // const handleCityInputChange = (event) => {
    //     setValues({...values, city: event.target.value})
    // }


    const handleNitrogenInputChange = (event) => {
        setValues({...values, nitrogen: event.target.value})
    }

    const handlePhosphorusInputChange = (event) => {
        setValues({...values, phosphorus: event.target.value})
    }

    const handlePotassiumInputChange = (event) => {
        setValues({...values, potassium: event.target.value})
    }

    const handleRainfallInputChange = (event) => {
        setValues({...values, rainfall: event.target.value})
    }
    const handlePhInputChange = (event) => {
        setValues({...values, ph: event.target.value})
    }

    const resetValues = () => {
        setFormOff(true)
        setValues({
            country: "",
            city : "",
            nitrogen: "",
            phosphorus: "",
            potassium: "",
            rainfall: "",
            temperature: "",
            ph: ""
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
        getPrediction(values).then(res=> {
            setFormOff(false)
            console.log(res)
            setData(res)
        }).catch(error => console.log(error))
        // fetch('http://localhost:5000/crop-predict', {method:'POST',body:e})
    }
    return(
    <div>
        {!formOff && <div className="pred">
                {dataa.prediction ? <div>
                   
                    You should grow {dataa.prediction}
                </div>:
                <strong>
                  {Object.keys(dataa)} {dataa.error.toLowerCase()}
                </strong>
                }
                <button className="retry" onClick={resetValues}>
                    Retry
                </button>
            </div>
        }
        { formOff && ( <div className="form-container">
         
            <form className="form" onSubmit={handleSubmit}>
              <FormDropdown className="Drop" value={values.country} onChange={handleCountryInputChange}/>
              <br/>
              <FormDropdown value={values.city} onChange={handleCityInputChange} data={values.country===''?[]:getCities(values.country)}/>
                {/* <input
                    onChange={handleCityInputChange}
                    value = {values.city}
                    className="form-field"
                    placeholder="Enter City"
                    type = "text"
                    name = "city"
                /> */}
                <input
                    onChange={handleNitrogenInputChange}
                    value = {values.nitrogen}
                    className="form-field"
                    placeholder="Enter Nitrogen eg 90"
                    type = "number"
                    name = "nitrogen"
                />
                <input
                    onChange={handlePhosphorusInputChange}
                    value = {values.phosphorus}
                    className="form-field"
                    placeholder="Enter Phosphorus e.g 70"
                    type = "number"
                    name = "phosphorus"
                />
                <input
                    onChange={handlePotassiumInputChange}
                    value = { values.potassium}
                    className="form-field"
                    placeholder="Enter Potassium e.g 50"
                    type = "number"
                    name = "potassium"
                    />
                <input
                    onChange={handleRainfallInputChange}
                    value = {values.rainfall}
                    className="form-field"
                    placeholder="Enter Rainfall e.g 500"
                    type = "number"
                    name = "rainfall"
                />

                <input
                    onChange={handlePhInputChange}
                    value = {values.ph}
                    className="form-field"
                    placeholder="Enter pH e.g 5"
                    type = "number"
                    name = "ph"
                />
                <button className="form-field">
                    PREDICT
                </button>
        </form>
         
    </div>)}

    </div>
    
    )
}

export default Crop;