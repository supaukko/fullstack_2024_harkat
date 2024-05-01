
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Anecdote = ({anecdote, vote, handleVote, handleClick}) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdote}
      </div>
      <div>
        <p>Has {vote === undefined ? 0 : vote} votes</p>
      </div>
      <div>
        <Button text='Vote' handleClick={handleVote} />
        <Button text='Next anecdote' handleClick={handleClick} />
      </div>
    </>
  )
}

const AnecdoteMostVotes = ({anecdotes, votes}) => {

  let index = 0
  let max = votes[index]
  for (let idx = 1; idx <= anecdotes.length; idx++) {
    if (max === undefined || max < votes[idx]) {
      max = votes[idx]
      index = idx
    }
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[index]}
      </div>
      <div>
        <p>Has {max === undefined ? 0 : max} votes</p>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const getRandomInt = () => {
  return Math.floor(Math.random() * anecdotes.length);
  }

  console.log('selected', selected)

  const handleClick = () => {
    let found = 0
    while(!found) {
      const index = getRandomInt()
      if (index !== selected) {
        setSelected(index)
        found = 1
      }
    }
  }

  const handleVote = () => {
    const v = {...votes}
    if (v[selected] === undefined) {
      v[selected] = 0
    }
    v[selected]++
    setVotes(v);
  }

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]}
        vote={votes[selected]}
        handleClick={handleClick}
        handleVote={handleVote} />

      <AnecdoteMostVotes anecdotes={anecdotes}
        votes={votes} />
    </>
  )
}

export default App