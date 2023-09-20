import { useEffect, useState } from 'react'
import { ListHeader, ListItem } from './components'

function App() {
  const userEmail = 'alanbrito@yopmail.com'
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      // Disable 'no-undef' check for the following line
      // eslint-disable-next-line no-undef
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (

    <div className="container">
      <div className="app">
        <ListHeader ListName=" ✅ Week tasks" getData={getData} />
        {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
      </div>
    </div>
  );
}

export default App
