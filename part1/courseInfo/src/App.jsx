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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const total = {
    exercises: 31
  }
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercises1={part1.exercises}  
        part2={part2.name} exercises2={part2.exercises}  
        part3={part3.name} exercises3={part3.exercises}  
      />
      <Total total={total.exercises} />
    </div>
  )
}

export default App