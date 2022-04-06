import React from 'react'
import FileUpload from './Fileupload.js'
import Calendarlist from './Calendarlist.js'
import './Dateslist.scss'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <div>
      <h2 className='text-success text-center py-4 m-auto'>Memorabilia</h2>
      <Container className='d-flex justify-content-between p-0 m-auto'>
        <Calendarlist/>
        <FileUpload multiple/>
      </Container>
    </div>
  )
}

export default App