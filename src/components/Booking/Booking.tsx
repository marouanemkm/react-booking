import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


export default function Booking() {
    
    const [value, onChange] = useState<Date>(new Date());

    console.log(value);
    
    
    return (
        <div>
            <DatePicker onChange={onChange} value={value} isOpen={true} />
        </div>
    )
}