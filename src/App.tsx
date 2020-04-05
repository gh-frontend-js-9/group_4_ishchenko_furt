import React from 'react';
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import {Footer} from "./redux/components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {FlexBox} from "./redux/components/FlexBox/FlexBox";
import {Main} from "./redux/components/Main/Main";
import {BackgroundBlock} from "./redux/components/BackgroundBlock/BackgroundBlock";
import {BurgerMenu} from "./redux/components/BurgerMenu/BurgerMenu";
import MainCardSliderPage from "./redux/pages/MainCardSliderPage/MainCardSliderPage";
import FeaturedPostPage from "./redux/pages/FeaturedPostPage/FeaturedPostPage";
import PopularPostPage from "./redux/pages/PopularPostPage/PopularPostPage";
import FreelanceThematicPostPage from "./redux/pages/FreelanceThematicPostPage/FreelanceThematicPostPage";
import EssentialsPostPage from "./redux/pages/EssentialsPostPage/EssentialsPostPage";
import FreelancePostPage from "./redux/pages/FreelancePostPage/FreelancePostPage";
import EssentialsThematicPostPage from "./redux/pages/EssentialsThematicPostPage/EssentialsThematicPostPage";
import PopularThematicPostPage from "./redux/pages/PopularThematicPostPage/PopularThematicPostPage";
import {PostsBox} from "./redux/components/PostsBox/PostsBox";
import {ViewAllBox} from "./redux/components/ViewAllBox/ViewAllBox";

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
                        <PostsBox>
                            <PopularPostPage/>
                            <ViewAllBox>
                                <PopularThematicPostPage/>
                            </ViewAllBox>
                        </PostsBox>

                        <PostsBox>
                            <EssentialsPostPage/>
                            <ViewAllBox>
                                <EssentialsThematicPostPage/>
                            </ViewAllBox>
                        </PostsBox>

                        <PostsBox>
                            <FreelancePostPage/>
                            <ViewAllBox>
                                <FreelanceThematicPostPage/>
                            </ViewAllBox>
                        </PostsBox>

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