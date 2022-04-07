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

const locales = {'en-GB':require('date-fns/locale/en-GB')}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: ()=> {return startOfWeek(new Date(), {weekStartsOn:1})},
    getDay,
    locales
})

const events = []

function Calendarlist (){
    const [newEvent, setNewEvent] = useState({title:'', start:'', end:'', allDay: 'true'})
    const [allEvents, setAllEvents] = useState(events)
    const addEvent = () => {setAllEvents([...allEvents, newEvent]);}

    //to delete the selected event only:
    let index = 0;
    allEvents.forEach((newEvent) => {newEvent.index  = index++});

    function deleteEvent(e){ 
        let eventsdel = [...allEvents];
        let idx = e.index
        let id = parseInt(idx)
        if (window.confirm(`${e.title} will be deleted!`)) {eventsdel.splice(id,1);}
            else{return eventsdel}
        setAllEvents(eventsdel)
    }
        
    return(
        <div className='calendar'>        
            <div className='list w-100 m-auto'>
                <InputGroup className="mb-3">
                    <FormControl
                    aria-describedby="basic-addon2" placeholder='Add your event' value={newEvent.title} 
                    onChange={(e)=> setNewEvent({...newEvent, title: e.target.value })} 
                    className='shadow-none'
                    />
                    <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={addEvent} className='shadow-none' aria-label='submit'> <i className="fas fa-plus"></i></Button>
                </InputGroup>

                <div className='pickers mb-3 '>
                    <DatePicker placeholderText='Start Date' dateFormat='dd/MM/yyyy' selected={newEvent.start} className='form-control shadow-none' 
                    withPortal isClearable showMonthDropdown showYearDropdown dropdownMode='select' calendarStartDay={1}
                    onChange={(start) => setNewEvent({...newEvent, start})} calendarClassName="datepickerPopper"
                    />   
                    <DatePicker placeholderText='End Date' dateFormat='dd/MM/y' selected={newEvent.end} className='form-control shadow-none'
                    withPortal isClearable showMonthDropdown showYearDropdown dropdownMode='select' calendarStartDay={1}
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
            endAccessor={({end}) => new Date(new Date(end).setHours(0,0, 0, 0) + 24 )}
            className='calendarMain bg-light '           
            views={['month', 'agenda']}
            selectable
            popup
            onSelectEvent={(e) => deleteEvent(e)}
            />
        </div>
    )
}

export default Calendarlist
