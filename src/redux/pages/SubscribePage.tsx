import React from 'react';
import {Wrapper} from '../components/Wrapper/Wrapper';
import {AuthorTheme} from '../components/AuthorTheme/AuthorTheme';
import {AuthorSidebar} from '../components/AuthorSidebar/AuthorSidebar';
import {Box} from '../components/Box/Box';
import {AuthorSlider} from '../components/AuthorSlider/AuthorSlider';
import {Calendar} from '../components/Calendar/Calendar';
import {SubscribeSmallBox} from '../components/SubscribeSmallBox/SubscribeSmallBox';

export const SubscribePage: React.FC = () => {

    return (
        <Wrapper>

            <Box>
                <AuthorTheme>

                </AuthorTheme>

                <AuthorSidebar>
                    <SubscribeSmallBox/>
                </AuthorSidebar>
            </Box>

        </Wrapper>
    );
};