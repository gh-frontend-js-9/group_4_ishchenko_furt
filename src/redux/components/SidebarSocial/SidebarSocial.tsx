import React from 'react';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import {Title} from '../Title/Title';
import './SidebarSocial.scss';
import {Icon} from '../Icon/Icon';

export const SidebarSocial: React.FC = () => {
    return (
        <div className={'sidebar-essentials'}>
            <Title mixin={'sidebar-post--center'}>
                Essentials
            </Title>
            <SidebarBox>
                <Title mixin={'sidebar-post--center'}>
                    SOCIAL MEDIA
                </Title>
                <div className={'social-icons'}>
                    <Icon mixin={'social-icons--pink social-icons--big'}/>
                </div>
            </SidebarBox>
        </div>
    )
}