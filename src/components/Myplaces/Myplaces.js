import React, {useState} from 'react'
import Map from './Map.js'
import List from './List.js'
import Bgr from '../Bgr.js';

function Myplaces() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
    <Bgr/>
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
    </>
  )
}

export default Myplaces
