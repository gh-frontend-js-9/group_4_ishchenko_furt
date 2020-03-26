import React from 'react';
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import {Footer} from "./redux/components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {FlexBox} from "./redux/components/FlexBox/FlexBox";
import {Main} from "./redux/components/Main/Main";
import {Background} from "./redux/components/Background/Background";
import {BackgroundBlock} from "./redux/components/BackgroundBlock/BackgroundBlock";
import {BurgerMenu} from "./redux/components/BurgerMenu/BurgerMenu";
import BlogPostPage from "./redux/pages/BlogPostPage/BlogPostPage";
import MainCardSliderPage from "./redux/pages/MainCardSliderPage/MainCardSliderPage";
import ReadingListPage from "./redux/pages/ReadingListPage/ReadingListPage";
import FeaturedPostPage from "./redux/pages/FeaturedPostPage/FeaturedPostPage";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>

                <BackgroundBlock>
                    <Wrapper>
                        <Header/>
                        <BurgerMenu/>
                    </Wrapper>
                </BackgroundBlock>
                <Main>
                    <Background>
                        <Wrapper>
                            <MainCardSliderPage/>
                        </Wrapper>
                    </Background>

                    <Wrapper>
                        <BlogPostPage/>

                        <ReadingListPage/>

                        <FlexBox>
                            <FeaturedPostPage/>
                        </FlexBox>
                    </Wrapper>
                </Main>

                <Wrapper>
                    <Footer/>
                </Wrapper>
            </BrowserRouter>
        </>
    )
};

export default App;