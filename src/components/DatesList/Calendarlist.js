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
    ]

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
                    <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={addEvent} className='shadow-none'> <i className="fas fa-plus"></i></Button>
                </InputGroup>

                <div className='pickers mb-3 inputContainer'>
                    <DatePicker placeholderText='Start Date' dateFormat='dd/MM/yyyy' selected={newEvent.start} className='form-control' 
                    withPortal isClearable showMonthDropdown showYearDropdown dropdownMode='select' calendarStartDay={1}
                    onChange={(start) => setNewEvent({...newEvent, start})} calendarClassName="datepickerPopper"
                    />   
                    <DatePicker placeholderText='End Date' dateFormat='dd/MM/y' selected={newEvent.end} className='form-control'
                    isClearable showMonthDropdown showYearDropdown dropdownMode='select' calendarStartDay={1}
                    onChange={(end) => setNewEvent({...newEvent, end})}  calendarClassName="datepickerPopper"
                    minDate={newEvent.start}
                    />
               </div>
            </div>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            format={format}
            startAccessor='start' 
            endAccessor='end'
            className='calendarMain'
           
            views={['month', 'agenda']}
            />
        </div>
    )
}

export default Calendarlist