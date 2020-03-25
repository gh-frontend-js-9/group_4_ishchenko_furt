import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import BlogPostPage from "./redux/pages/BlogPostPage";
import {Footer} from "./redux/components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import FeaturedPostPage from "./redux/pages/FeaturedPostPage";
import {FlexBox} from "./redux/components/FlexBox/FlexBox";
import {Main} from "./redux/components/Main/Main";
import MainCardSliderPage from "./redux/pages/MainCardSliderPage";
import {BackgroundBlock} from "./redux/components/BackgroundBlock/BackgroundBlock";
import {BurgerMenu} from "./redux/components/BurgerMenu/BurgerMenu";

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
                    <BackgroundBlock>
                        <Wrapper>
                            <MainCardSliderPage/>
                        </Wrapper>
                    </BackgroundBlock>

                    <Wrapper>
                        <BlogPostPage/>

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