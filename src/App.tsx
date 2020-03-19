import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import BlogPostPage from "./redux/pages/BlogPostPage";
import MainCardPage from "./redux/pages/MainCardPage";
import {Footer} from "./redux/components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Header/>
                </Wrapper>

                <main className='main'>
                    <MainCardPage/>
                    <Wrapper>
                        <BlogPostPage/>
                    </Wrapper>
                </main>

                <Wrapper>
                    <Footer/>
                </Wrapper>

            </BrowserRouter>

        </>
    )
};

export default App;

