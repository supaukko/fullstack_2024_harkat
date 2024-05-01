import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const get = (name, apiKey) => {
  const request = axios.get(`${baseUrl}?q=${name}&appid=${apiKey}&units=metric`)
  return request
    .then(response => {
        return response.data
    })
}

export default { 
  get 
}