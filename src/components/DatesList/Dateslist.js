import React from 'react'
import FileUpload from './Fileupload.js'
import Calendarlist from './Calendarlist.js'
import './Dateslist.scss'
import Bgr from '../Bgr.js'

function App() {

  return (
    <>
    <Bgr/>
    <div className='dateslist'>
    <h2>Memorable dates and souvenirs</h2>
      <Calendarlist/>
      <FileUpload multiple/>
    </div>
    </>
  )
}

export default App