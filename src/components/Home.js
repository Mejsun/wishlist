import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Home.scss'


function Home() {
    return (
        <div className='home'>
        <Card className='text-center'>
          <div className='header'><h1> My online memory box</h1> </div> 
           <Card.Header className='content'>Store all the places, pictures and dates you want to remember in one place. </Card.Header>
           <div className='btns'>
            <Button variant='secondary'>Sign up</Button>
            <Button variant='success'>Log in</Button>
           </div>
        </Card>
        </div>
    )
}

export default Home
