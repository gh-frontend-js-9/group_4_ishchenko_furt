import React from "react";
import {SidebarBox} from "../SidebarBox/SidebarBox";
import '../SidebarPopularPost/SidebarPost.scss';
import './SidebarSocial.scss';
import {Icon} from "../Icon/Icon";

export const SidebarSocial:React.FC = () =>{
    return(
        <div>
            <h3 className={'sidebar-title'}>
                Essentials
            </h3>
            <SidebarBox>
                <h3 className={'sidebar-title'}>
                    Social
                </h3>
                <div className={'social-icons'}>
                    <Icon/>
                </div>
            </SidebarBox>
        </div>
    )
}