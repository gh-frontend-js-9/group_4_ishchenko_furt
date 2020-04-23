import React from "react";
import './Banner.scss'
import {Flags} from "./Flags";

export const Banner:React.FC = () =>{

    return(
        <div className={'banner'}>
            <div className={'banner__canvas'}>
                Ads Banner
            </div>
            <Flags/>
        </div>
    )
}