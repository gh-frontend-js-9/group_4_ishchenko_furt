import React from "react";
import './VeiwAllBox.scss'

export const ViewAllBox: React.FC = (props: any) => {
    const {children} = props;

    return <>
        <div >
            <div className='view-all'>
                <span className='view-all--hovered'>View all</span>
            </div>
            <div className='thematic-cards-box'>
                {children}
            </div>
        </div>
    </>
};