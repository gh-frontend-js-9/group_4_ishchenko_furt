import React from "react";
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import './Calendar.scss'



/*const mapDayOfWeek: any = () =>{
    /!*

    const renderDayOfWeeks: any = daysOfWeek.map((day:any)=>(
        <span>
            {day}
        </span>
    ));*!/

    return 'S M T W T F S'
}

const dayOfWeek :any = {
   localeUnits: {
       S:'S',
       M:'M',
       T:'T',
       W:'W',
       TH:'T',
       F:'F',
       SU:'S'
   }
}

const weekdaysShort = {
    en-gb: ["M", "T", "W", "T", "F", "S", "S"]
};*/


export const Calendar: React.FC = () =>{
    return(
        <DayPicker
            showOutsideDays={true}
        />
    )
}