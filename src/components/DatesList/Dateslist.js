import React from 'react'
import FileUpload from './Fileupload.js'
import Calendarlist from './Calendarlist.js'
import './Dateslist.scss'

function App() {

  return (
    <>
    <div className='dateslist'>
    <h2>Memorabilia</h2>
    <div className='maindiv'>
      <Calendarlist/>
      <FileUpload multiple/>
    </div>
    </div>
    </>
  )
}

export default App