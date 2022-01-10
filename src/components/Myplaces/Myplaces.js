import React, {useState} from 'react'
import Map from './Map.js'
import List from './List.js'

function Myplaces() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='myplaces'>
      <List 
      tasks={tasks} 
      setTasks={setTasks} 
      />
      <Map
      tasks={tasks} 
      setTasks={setTasks} 
      />
    </div>
  )
}

export default Myplaces
