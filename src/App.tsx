import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import BlogPostPage from "./redux/pages/BlogPostPage";
import MainCardPage from "./redux/pages/MainCardPage";





const App: React.FC = () => {
    return (
        <>
                <Wrapper>
                    <Header/>
                    <MainCardPage/>
                    <main className={'main'}>
                        <BlogPostPage/>
                    </main>
                </Wrapper>
        </>
    )
};

export default App;

