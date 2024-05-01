const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {'id':1, 'part': 'Fundamentals of React', 'exercises': 10},
      {'id':2, 'part': 'Using props to pass data', 'exercises': 7},
      {'id':3, 'part': 'State of a component', 'exercises': 14},
    ]
  }

  const Header = ({course}) => {
    return ( <h1>{course.name}</h1> )
  }

  const Part = ({part, exercises}) => {
    return (
      <p>
        {part} {exercises}
      </p>
    )
  }

  const Content = ({course}) => {
    return (
      <>
        {course.parts.map((item) => (
          <Part key={item.id} part={item.part} exercises={item.exercises}/>
        ))}
      </>
    )
  }

  const Total = ({course}) => {
    return (
      <p>Number of exercises {
        course.parts.reduce((acc, item) => {
          return acc + item.exercises }, 0)}</p>
    )
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App