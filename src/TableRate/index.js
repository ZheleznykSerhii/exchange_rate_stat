import React, { useState, useEffect } from 'react';
import { API } from '../API/api';
import style from './TableRate.module.css'




const TableRate = () => {

//   const [rateForToday, setDateForToday] = useState([])

//   useEffect(() => {
  
//   const todayData =  API()
//    setDateForToday(todayData)
//    console.log(rateForToday)
  
// }, []);
   return    (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
       
          <tr >
            <td>data.type</td>
            <td>data.amount</td>
            <td>data.currency</td>
          </tr>
       
      </tbody>
    </table>
  )
}

export default TableRate