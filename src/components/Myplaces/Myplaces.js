import React, {useState} from 'react'
import Map from './Map.js'
import List from './List.js'
import { Container } from 'react-bootstrap';

function Myplaces() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='places'>
    <h2 className='text-success text-center py-4 m-auto'>My places</h2>
    <Container className='myplaces d-flex justify-content-between p-0 m-auto wrapper'>
      <List 
      tasks={tasks} 
      setTasks={setTasks} 
      />
      <Map
      tasks={tasks} 
      setTasks={setTasks} 
      />
    </Container>
    </div>
  )
}

export default Myplaces
