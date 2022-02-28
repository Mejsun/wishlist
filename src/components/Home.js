import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Bgr from './Bgr'
import './Home.scss'
import calendar from './Images/calendarscreenshot.PNG'
import expensetrack from './Images/expensescreenshot.PNG'
import places from './Images/Myplaces.PNG'

function Home() {
    return (
        <div className='home'>
        <Bgr />
        <Card className='text-center '>
          <div className='header d-flex m-auto'><h1> My online memory box</h1> </div> 
           <Card.Header className='content m-auto'>Store all the places, pictures and dates you want to remember in one place. </Card.Header>
           <div className='slideContainer'>
            <div className='screenshots'>
                <img src={calendar} alt='mydates'/>
                <img src={expensetrack} alt='myexpenses'/>
                <img src={places} alt='myplaces'/>
            </div>
           </div>
           <div className='btns d-flex'>
            <Button variant='secondary'>Sign up</Button>
            <Button variant='success'>Log in</Button>
           </div>
        </Card>
        </div>
    )
}

export default Home
