import React, { useState, useEffect } from 'react';
import {rateForTodayAPI} from '../API/api'
import style from './TableRate.module.css'




const TableRate = () => {

  const date = new Date()
  const todayDate = date.getDate()
  const todayMonth = date.getMonth() + 1 < 9? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const todayYear = date.getFullYear()

  const [rateForToday, setDateForToday] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await rateForTodayAPI()
      setDateForToday(data)
     
    }
    
    fetchData()
  }, [])

   return    (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Type</th>
          
          <th>Currency</th>
          <th>Amount on {todayDate}:{todayMonth }:{todayYear}</th>
        </tr>
      </thead>
      <tbody>
      {rateForToday && rateForToday.map((item) => (
          <tr key={item.r030}>
           
            <td>{item.txt}</td>
            
            <td>{item.cc}</td>
            <td>{item.rate}</td>
          </tr>
        ))}
       
      </tbody>
    </table>
  )
}

export default TableRate