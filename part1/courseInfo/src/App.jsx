const Header = (props) => {
  return (
    <>
      <p>Course: {props.course}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p> {props.name} - {props.exercises} </p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name={props.part1}  exercises={props.exercises1} />
      <Part name={props.part2}  exercises={props.exercises2} />
      <Part name={props.part3}  exercises={props.exercises3} />
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