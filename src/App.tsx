import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import BlogPostPage from "./redux/pages/BlogPostPage";
import MainCardPage from "./redux/pages/MainCardPage";
import FeaturedPostPage from "./redux/pages/FeaturedPosts";
import './redux/pages/FeaturedPost.scss'
import {Footer} from "./redux/components/Footer/Footer";

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

                    <div className='featured-post-page'>
                        <FeaturedPostPage/>
                    </div>
                </Wrapper>
            </main>

            <Footer/>
        </>
    )
};

export default App;

