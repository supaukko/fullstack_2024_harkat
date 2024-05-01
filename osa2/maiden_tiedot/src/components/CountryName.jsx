const CountryName = ({ country, handleShowClicked }) => {

  return (
    <div>
        <li>
            {country.name}
            <button disabled={country.visible}
                onClick={()=>handleShowClicked(country)}>show</button>
        </li>
    </div>
  )
}

export default CountryName