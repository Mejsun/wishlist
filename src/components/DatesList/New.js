import moment, { weekdaysShort } from 'moment'

weekdaysShort = moment.weekdaysShort();

let weekdayshortname = this.weekdaysShort.map( day => {
    return (
        <th key={day} className='weekday'>
            {day}
        </th>
    )
})
