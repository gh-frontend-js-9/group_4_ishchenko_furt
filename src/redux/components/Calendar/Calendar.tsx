import React from "react";
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import './Calendar.scss';
import  {WEEKDAYS_SHORT} from './CalendarSetting';



export const Calendar: React.FC = () =>{
    return(
        <DayPicker
            showOutsideDays={true}
            weekdaysShort={WEEKDAYS_SHORT}
        />
    )
}