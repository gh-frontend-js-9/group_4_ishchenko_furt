import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import BlogPostPage from "./redux/pages/BlogPostPage";
import MainCardPage from "./redux/pages/MainCardPage";
import Slider from "./redux/components/Slider/Slider";

const App: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Header/>
            </Wrapper>

            <main className='main'>
                <MainCardPage/>
                <Wrapper>
                    <BlogPostPage/>
                </Wrapper>
            </main>

        </>
    )
};

export default App;

