import CountryName from './CountryName'

const FindCountries = ({
  name,
  handleNameChange,
  countries,
  max,
  handleShowClicked }) => {

  return (
    <div>
      <div>
        Find countries: <input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter country name..." />
      </div>
      <div>
        {
          (countries?.length > 1 && countries?.length <= max) ?
            countries.map( country => 
              <CountryName
                key={country.name}
                country={country}
                handleShowClicked={handleShowClicked} />)
              : countries?.length > 1 && name?.length ?
                <p>Too many matches, specify another filter</p> : <p></p>
        }
      </div>
    </div>
  )
}

export default FindCountries