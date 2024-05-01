const Languages = ({ languages }) => {

  return (
    <>
        <h2>Languages</h2>
        <ul>
        {
            Object.entries(languages).map(([key, value]) =>
                <li key={key}>{value}</li>)
        }
        </ul>
    </>
  )
}

export default Languages