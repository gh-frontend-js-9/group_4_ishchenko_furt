import React from "react";
import {SidebarBox} from "../SidebarBox/SidebarBox";
import {Title} from "../Title/Title";
import '../SidebarPopularPost/SidebarPost.scss';
import './SidebarSocial.scss';
import {Icon} from "../Icon/Icon";

export const SidebarSocial:React.FC = () =>{
    return(
        <div>
            <Title mixin={'sidebar-post--center'}>
                Essentials
            </Title>
            <SidebarBox>
                <Title mixin={'sidebar-post--center'}>
                    Social
                </Title>
                <div className={'social-icons'}>
                    <Icon mixin={'social-icons--pink social-icons--big'}/>
                </div>
            </SidebarBox>
        </div>
    )
}