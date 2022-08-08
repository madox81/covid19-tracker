import axios from 'axios'
import {Header, _Date, Data, Select, Buttons, Loading} from './Components'
import React, { useState, useEffect } from 'react'


function App(){
  

  const baseUrl = "https://api.covid19api.com/summary"

  const [data, setData] = useState({})
  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState([])

  const getData = () => {
    setLoading(true)
    axios.get(baseUrl).then(response => {
      setData(response.data)
      setCountries(['Global',
        ...response.data.Countries.map(country => (country.Country))
      ])
      setCountry({ Country: "Global", ...response.data.Global })
      setLoading(false)
    }).catch(err => console.log(err)) 
  }
  

  // Handlers
  const handleSelect = (e) => {
    if(e.target.value === 'Global'){
      setCountry({ Country: "Global", ...data.Global })

    }else{
      setCountry(
        data.Countries.find(country => (
          country.Country.includes(e.target.value)
        ))
      )
    }
  }

  const handleClickG = () => {
    setCountry({ Country: "Global", ...data.Global })
  }

  const handleClickU = () => {
    getData()
  }
  //

  useEffect(() => {
    getData()
  },[])
  
  return(
    <>
      <Header />
      {loading ? <Loading/> : 
        <>
          <_Date date={country.Date}/>
          <Data country={country}/>
          <Select 
            countries={countries}
            handleSelect={handleSelect}
            country={country}
          />
          <Buttons handleClickG={handleClickG} handleClickU={handleClickU}/>
        </>

      }
      
    </>
  )
}

export default App