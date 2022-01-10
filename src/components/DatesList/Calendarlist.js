import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const locales = {
    'en-GB':require('date-fns/locale/en-GB')
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
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
            <h2> Calendar </h2>
            <div>
            <input type='text' placeholder='Add your event' value={newEvent.title} onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})}/>
            <DatePicker placeholderText='Start Date' selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>
            <DatePicker placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>
            <button id="button-addon2" type='submit' onClick={addEvent}>
            <i className="fas fa-plus"></i>
            </button>
            </div>
            
            <Calendar localizer={localizer} events={allEvents} 
            startAccessor='start' endAccessor='end'
            style={{height: 500, margin:'50px'}}
            />
        </div>

    )

}

export default Calendarlist