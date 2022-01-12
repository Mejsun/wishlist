import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

//import Calendar from 'react-calendar';
//import DateRangePicker from '@wojtekmaj/react-daterange-picker';
//import DatePicker from 'react-date-picker'
//import moment from 'moment'

const locales = {'en-GB':require('date-fns/locale/en-GB')}

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
    const [newEvent, setNewEvent] = useState({title:'', start:'', end:''})
    const [allEvents, setAllEvents] = useState(events)
    const addEvent = () => {setAllEvents([...allEvents, newEvent])}

    return(
        <div className='calendar'>        
            <div className='list'>
                <InputGroup className="mb-3 inputContainer">
                    <FormControl
                    aria-describedby="basic-addon2" placeholder='Add your event' value={newEvent.title} 
                    onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})}
                    />
                    <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={addEvent}> <i className="fas fa-plus"></i></Button>
                </InputGroup>

                <div className='pickers mb-3 inputContainer'>
                    <DatePicker placeholderText='Start Date' dateFormat='dd/MM/yyyy' selected={newEvent.start} 
                    onChange={(start) => setNewEvent({...newEvent, start})} className='form-control'
                    isClearable
                    calendarClassName="datepickerPopper"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                    withPortal
                    calendarStartDay={1}
                    />   
                    <DatePicker placeholderText='End Date' dateFormat='dd/MM/y' selected={newEvent.end} 
                    onChange={(end) => setNewEvent({...newEvent, end})} className='form-control'
                    isClearable 
                    calendarClassName="datepickerPopper"
                    minDate={newEvent.start}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                    withPortal
                    calendarStartDay={1}
                    />
               </div>
            </div>
            <br/>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            format={format}
            startAccessor='start' 
            endAccessor='end'
            className='calendarMain'
            style={{height:500, width: '40vw', margin: 0, position: 'relative'}}
            />
        </div>
    )
}

export default Calendarlist

/*
         
<Calendar localizer={localizer} events={allEvents} format={format}
        startAccessor='start' endAccessor='end'
        className='calendarMain'
        style={{height:500, width: '40vw', margin: 0, position: 'relative'}}
/>

            
*/