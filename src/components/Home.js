import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Home.scss'
import calendar from './Images/cal.avif'
import expensetrack from './Images/exp.avif'
import places from './Images/places.avif'

function Home() {
    return (
        <div className='home'>
        <Card className='card text-center border-5 border-success'>
          <div className='header d-flex m-auto py-4 text-success'><h1> My online memory box</h1> </div> 
           <Card.Header className='content m-auto mb-2 py-5 w-100'>Store all the places, pictures and dates you want to remember in one place. </Card.Header>
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
