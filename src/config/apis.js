import axios from "axios"


export const getPrediction=async (obj)=>{
    const {data} = await axios.post('http://localhost:5000/crop-predict', obj, {headers:{
        "Access-Control-Allow-Origin": "*",
    }})
    return data
}