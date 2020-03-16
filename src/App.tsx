import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import {BlockCard} from "./redux/components/BlockCard/BlockCard";


const App: React.FC = () => {
    return (
        <Wrapper>
            <Header/>

            <main className='main'>
                <BlockCard/>
            </main>
        </Wrapper>
    )
};

export default App;