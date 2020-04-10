import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {BackgroundBlock} from "../components/BackgroundBlock/BackgroundBlock";
import {ViewAllBox} from "../components/ViewAllBox/ViewAllBox";
import {FlexBox} from "../components/FlexBox/FlexBox";
import {PostsBox} from "../components/PostsBox/PostsBox";
import MainCardSliderComponent from "../components/MainCardSliderComponent/MainCardSliderComponent";
import FeaturedPostComponent from "../components/FeaturedPostComponent/FeaturedPostComponent";
import PopularPostComponent from "../components/PopularPostComponent/PopularPostComponent";
import EssentialsThematicPostComponent
    from "../components/EssentialsThematicPostComponent/EssentialsThematicPostComponent";
import PopularThematicPostComponent from "../components/PopularThematicPostComponent/PopularThematicPostComponent";
import FreelanceThematicPostComponent
    from "../components/FreelanceThematicPostComponent/FreelanceThematicPostComponent";
import FreelancePostComponent from "../components/FreelancePostComponent/FreelancePostComponent";
import EssentialsPostComponent from "../components/EssentialsPostComponent/EssentialsPostComponent";
import ReadingListPage from "../components/ReadingList/ReadingList";


export const HomePage: React.FC = () => {
    return (
        <>
            <BackgroundBlock>
                <Wrapper>
                    <MainCardSliderComponent/>
                </Wrapper>
            </BackgroundBlock>

            <Wrapper>
                <PostsBox>
                    <PopularPostComponent/>
                    <ViewAllBox>
                        <PopularThematicPostComponent/>
                    </ViewAllBox>
                </PostsBox>

                <PostsBox>
                    <EssentialsPostComponent/>
                    <ViewAllBox>
                        <EssentialsThematicPostComponent/>
                    </ViewAllBox>
                </PostsBox>

                <PostsBox>
                    <FreelancePostComponent/>
                    <ViewAllBox>
                        <FreelanceThematicPostComponent/>
                    </ViewAllBox>
                </PostsBox>

                <ReadingListPage/>

                <FlexBox>
                    <FeaturedPostComponent/>
                </FlexBox>
            </Wrapper>
        </>
    )
};