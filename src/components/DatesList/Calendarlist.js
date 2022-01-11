import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer, Day} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'


const locales = {
    'en-GB':require('date-fns/locale/en-GB')
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: ()=> {return startOfWeek(new Date(), {weekStartsOn:1})},
    getDay,
    locales
})

const events = [
    {
        title: 'Meeting',
        allDay: true,
        start: new Date(2022, 1, 1),
        end: new Date(2022,1, 1)
    },
    {
        title: 'Meeting 2',
        start: new Date(2022, 1, 2),
        end: new Date(2022, 1, 4)
    }]



function Calendarlist (){
    const [newEvent, setNewEvent] = useState({ttile:'', start:'', end:''})
    const [allEvents, setAllEvents] = useState(events)

    function addEvent(){
        setAllEvents([...allEvents, newEvent])
    }

    return(
        <div className='calendar'>
            
            <div className='list'>
                <InputGroup className="mb-3 inputContainer">
                        <FormControl
                        aria-describedby="basic-addon2"
                        placeholder='Add your event' value={newEvent.title} onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})}
                        />
                        <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={addEvent}>
                        <i className="fas fa-plus"></i>
                        </Button>
                </InputGroup>
                <div className='pickers'>
                        <DatePicker className='datepicker' placeholderText='Start Date' selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>
                        <DatePicker className='datepicker' placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>
                </div>
            </div><br/>
        </div>
    )
}

export default Calendarlist

/*
<Calendar localizer={localizer} events={allEvents} 
            startAccessor='start' endAccessor='end'
            className='calendarMain'
            style={{height:500, width: '40vw', margin: 0, position: 'relative'}}
            />
*/