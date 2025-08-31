const Header = (props) => {
  return (
    <>
      <p>Course: {props.course}</p>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <p>Content: <br /> Part 1: {props.part1}<br /> Exercises: {props.exercises1} <br /> Part 2: {props.part2} <br /> Exercises: {props.exercises2} <br /> Part 3: {props.part3} <br /> Exercises: {props.exercises3} </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total Exercises: {props.total} </p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = 31
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}  
        part2={part2} exercises2={exercises2}  
        part3={part3} exercises3={exercises3}  
      />
      <Total total={total} />
    </div>
  )
}

export default App