import React from "react";
import './Checkbox.scss'
export const Checkbox: React.FC = (props: any) => {
    const {children} = props;

    return (
            <label className='checkbox'>
                <input className='checkbox__input' required type="checkbox" id="scales" name="scales"/>
                {children}
            </label>
    );
};
