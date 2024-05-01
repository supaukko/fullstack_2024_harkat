import { useState, useEffect } from 'react'
import Country from './components/Country'
import Weather from './components/Weather'
import FindCountries from './components/FindCountries'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(items => {
        setCountries([...items])
      })
      .catch(err => 
        console.log('Error', err))
  }, [])

  const handleNameChange = (event) => {
    //console.log('handleNameChange', event.target.value)
    setName(event.target.value)
    setCountries(countries.map(c => {
        c.visible = false
        return c
    }))
  }

  const handleShowClicked = (country) => {
    setCountries(countries.map(c => {
      if (c.name === country.name) {
        c.visible = true
      }
      else {
        c.visible = false;
      }
      return c;
    }))
  }

  const filteredCountries = countries.filter(
    c => c.name.toLowerCase().includes(name.toLowerCase()))

  const visibleCountry = filteredCountries.length === 1 ? filteredCountries[0] : 
    filteredCountries.some(c => c.visible) ? filteredCountries.find(c => c.visible) : null

  return (
    <div>
      <FindCountries
        name={name}
        handleNameChange={handleNameChange}
        countries={filteredCountries}
        max={10}
        handleShowClicked={handleShowClicked} />
      {
        visibleCountry &&
        <>
          <Country country={visibleCountry} />
          <Weather city={visibleCountry.capital} />
        </>
      }
    </div>
  )
}

export default App