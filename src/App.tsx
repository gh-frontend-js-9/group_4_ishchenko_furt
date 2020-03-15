import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import {ArticleCard} from "./redux/components/ArticleCard/ArticleCard";


const App: React.FC = () => {
    return (
        <Wrapper>
            <Header/>
            <ArticleCard/>
        </Wrapper>
    )
};

export default App;