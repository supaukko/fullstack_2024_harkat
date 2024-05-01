const Flag = ({ flags }) => {

  //console.log('Flag', flags)

  return (
    <img style={{ border: '1px solid black' }}
        src={flags.png} alt={flags.alt} />
  )
}

export default Flag