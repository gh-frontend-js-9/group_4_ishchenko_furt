import React from 'react';
import './App.css'
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";


const App: React.FC = () => {
    return (
        <Wrapper>
            <Header/>
        </Wrapper>
    )
};

export default App;