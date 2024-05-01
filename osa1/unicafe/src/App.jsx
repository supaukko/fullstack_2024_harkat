import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Feedback = ({handleGood, handleNeutral, handleBad}) => {
  return (
    <>
      <tr>
        <td colSpan='3'><h1>Give feedback</h1></td>
      </tr>
      <tr>
        <td>
          <Button text='good' handleClick={handleGood} />
        </td>
        <td>
          <Button text='neutral' handleClick={handleNeutral} />
        </td>
        <td>
          <Button text='bad' handleClick={handleBad} />
        </td>
      </tr>
    </>
  )
}

const StatisticLine = ({text, unit, value}) => {
  return (
    <tr>
      <td><p>{text}</p></td>
      <td colSpan='2'><p>{value} {unit}</p></td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = (good + neutral + bad).toFixed(2)
  console.log('Summa', sum)
  const avg = (sum ? (good + bad * -1) / sum : 0).toFixed(2)
  const positive = ((sum ? good / sum : 0) * 100).toFixed(2)

  return (
    <>
      <tr><td colSpan='3'><h1>Statistics</h1></td></tr>
      {sum <= 0 ? <tr><td colSpan='3'><p>No feedback given</p></td></tr> : 
        <>
          <StatisticLine text='good' unit='' value={good} />
          <StatisticLine text='neutral' unit='' value={neutral} />
          <StatisticLine text='bad' unit='' value={bad} />
          <StatisticLine text='all' unit='' value={sum} />
          <StatisticLine text='average' unit='' value={avg} />
          <StatisticLine text='positive' unit='%' value={positive} />
        </>
      }
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    // <table border='1'>
    <table>
      <tbody>
        <Feedback
          handleGood={() => setGood(good + 1)}
          handleNeutral={() => setNeutral(neutral + 1)}
          handleBad={() => setBad(bad + 1)}
        />
        <Statistics
          good={good} neutral={neutral} bad={bad} />
      </tbody>
    </table>
  )
}

export default App