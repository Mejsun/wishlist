import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Home.scss'
import calendar from './Images/calendarscreenshot.PNG'
import expensetrack from './Images/expensescreenshot.PNG'
import places from './Images/Myplaces.PNG'

function Home() {
    return (
        <div className='home'>
        <Card className='text-center m-5 border-5 border-success'>
          <div className='header d-flex m-auto py-4 text-success'><h1> My online memory box</h1> </div> 
           <Card.Header className='content display-6 m-auto py-5'>Store all the places, pictures and dates you want to remember in one place. </Card.Header>
           <div className='slideContainer'>
            <div className='screenshots'>
                <img src={calendar} alt='mydates'/>
                <img src={expensetrack} alt='myexpenses'/>
                <img src={places} alt='myplaces'/>
            </div>
           </div>
           <div className='btns d-flex p-3 justify-content-center gap-3'>
            <Button variant='secondary'>Sign up</Button>
            <Button variant='success'>Log in</Button>
           </div>
        </Card>
        </div>
    )
}

export default Home
