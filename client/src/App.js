import { useEffect, useState } from 'react'
import { ListHeader, ListItem } from './components'

const App = () => {
  const userEmail = 'alanbrito@yopmail.com' 
  const [tasks, setTasks] = useState(null)

  const getData = async () => {    
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  } 

  useEffect(() => getData, [])
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='container'>  
      <div className='app'>
        <ListHeader ListName={' ✅ Week tasks'}/>
        {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
      </div>
    </div>
  );
}

export default App
