import axios from "axios"

export const rateForTodayAPI = async () => {
let result = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json` )
          
  return result.data
             
}