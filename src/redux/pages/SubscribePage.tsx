import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import Pagination from "../components/Pagination/Pagination";
import {AuthorTheme} from "../components/AuthorTheme/AuthorTheme";
import {AuthorSidebar} from "../components/AuthorSidebar/AuthorSidebar";
import {Box} from "../components/Box/Box";
import {SidebarSearchBar} from "../components/SidebarSearchBar/SidebarSerchBar";
import {SidebarSocial} from "../components/SidebarSocial/SidebarSocial";
import {SubscribeSmallBox} from '../components/SubscribeSmallBox/SubscribeSmallBox';
import {SidebarSlider} from "../components/SidebarSlider/SidebarSlider";
import {Calendar} from "../components/Calendar/Calendar";
import {Banner} from "../components/Baner/Banner";
import SidebarRecentPost from "../components/SidebarRecentPost/SidebarRecentPost";
import SidebarPopularPost from "../components/SidebarPopularPost/SidebarPopularPost";


export const SubscribePage: React.FC = () => {

    return (
        <Wrapper>

            <Box>
                <AuthorTheme>
                    <Pagination/>
                </AuthorTheme>

                    <AuthorSidebar>
                        <SidebarSearchBar/>

                        <SidebarPopularPost/>

                        <SidebarRecentPost/>

                        <SubscribeSmallBox/>

                        <SidebarSlider/>

                        <SidebarSocial/>

                        <Calendar/>

                        <Banner/>
                    </AuthorSidebar>
                </Box>

        </Wrapper>
    );
};