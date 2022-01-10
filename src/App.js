import React, {useState} from 'react'
import Map from './components/Myplaces/Map.js'
import List from './components/Myplaces/List.js'
import Menu from './components/Menu.js'
import FileUpload from './components/DatesList/Fileupload.js'
import Calendarlist from './components/DatesList/Calendarlist.js'

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Menu/>
      <List 
      tasks={tasks} 
      setTasks={setTasks} 
      />
      <Map
      tasks={tasks} 
      setTasks={setTasks} 
      />
      <FileUpload/>
      <Calendarlist/>
    </div>
  )
}

export default App
