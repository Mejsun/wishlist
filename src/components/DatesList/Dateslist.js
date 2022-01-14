import React from 'react'
import FileUpload from './Fileupload.js'
import Calendarlist from './Calendarlist.js'
import './Dateslist.scss'

function App() {

  return (
    <div className='dateslist'>
      <Calendarlist/>
      <FileUpload multiple/>
    </div>
  )
}

export default App