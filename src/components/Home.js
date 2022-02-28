import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Bgr from './Bgr'
import './Home.scss'


function Home() {
    return (
        <div className='home'>
        <Bgr />
        <Card className='text-center '>
          <div className='header d-flex m-auto'><h1> My online memory box</h1> </div> 
           <Card.Header className='content m-auto'>Store all the places, pictures and dates you want to remember in one place. </Card.Header>
           <div className='btns d-flex'>
            <Button variant='secondary'>Sign up</Button>
            <Button variant='success'>Log in</Button>
           </div>
        </Card>
        </div>
    )
}

export default Home
