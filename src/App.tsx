import React from 'react';
import {Header} from "./redux/components/Header/Header";
import {Wrapper} from "./redux/components/Wrapper/Wrapper";
import {Footer} from "./redux/components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {HomePage} from "./redux/pages/HomePage";
import {NewPage} from "./redux/pages/NewPage";
import {BurgerMenu} from "./redux/components/BurgerMenu/BurgerMenu";
import {Main} from "./redux/components/Main/Main";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Header/>
                    <BurgerMenu/>
                </Wrapper>

                <Main>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/new' component={NewPage}/>
                </Main>

                <Wrapper>
                    <Footer/>
                </Wrapper>
            </BrowserRouter>
        </>
    );
};

export default App;