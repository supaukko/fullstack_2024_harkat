import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response =>
    response.data.map(d => mapper(d))
  )
}

const get = name => {
  console.log('get', name)
  const request = axios.get(`${baseUrl}/name/${name}`)
  return request
    .then(response => mapper(response.data))
}

const mapper = countryData => {
  if (countryData) {
      return {
        visible: false,
        name: countryData.name.common,
        capital: countryData.capital,
        flags: countryData.flags,
        languages: countryData.languages,
        currencies: countryData.currencies,
        area: countryData.area
      }
  }
  return null
}

export default { 
  getAll, get 
}