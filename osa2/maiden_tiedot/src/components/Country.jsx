import Languages from './Languages'
import Flag from './Flag'

const Country = ({ country }) => {

  //console.log('Country', country)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <Languages languages={country.languages}/>
      <Flag flags={country.flags} />
    </div>
  )

}

export default Country