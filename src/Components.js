import moment from 'moment'
import numbro from 'numbro'

import React from 'react'

import "./styles.css";

//Helpers

function formatNum(num){
  return numbro(num).format({
    thousandSeparated: true
  })
}

function formatDate(date){
  return moment(date).format('LLLL')
}

//Components

export function Header(){
  return (
    <div className="header">
      <h1>C<i className='fa-solid fa-virus-covid'></i>vid 19 Tracker</h1>
      <h6>Covid 19 API by <a href="https://covid19api.com/">covid19api.com</a></h6>
    </div>
  )
}

export function _Date( { date }){
  return(
    <div className="date">{formatDate(date)}</div>
  )
}

export function Data({ country }) {
  return (
    <div className="data">
      <div className="data__details">
        <h3>Deaths</h3>
        <div>New Deaths: {formatNum(country.NewDeaths)}</div>
        <div>Total Deaths: {formatNum(country.TotalDeaths)}</div>
      </div>
      <div className="data__details">
        <h3>Confirmed</h3>
        <div>New Confirmed: {formatNum(country.NewConfirmed)}</div>
        <div>Total Confirmed: {formatNum(country.TotalConfirmed)}</div>
      </div>
    </div>
  )
}

export function Select({ countries, handleSelect, country }){
  
  return (
    <div className="select">
      <select onChange={(e) => handleSelect(e)} value={country.Country}>
        {
          countries.map(name => (
            <option value={name}>
              {name}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export function Buttons({ handleClickG, handleClickU }){
  return (
    <div className="buttons">
      <button onClick={() => handleClickG()}>Global</button>
      <button onClick={() => handleClickU()}>Update</button>
    </div>
  )
}

export function Loading(){
  return (
    <div className="loading">Loading ...</div>
  )
}

