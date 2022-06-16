import axios from "axios"

export const API = () =>{
let data = axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json` )
        
          return data.data
          
        
}