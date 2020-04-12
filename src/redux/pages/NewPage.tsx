import React from "react";
import {Wrapper} from '../components/Wrapper/Wrapper'
import {BreadCrumb} from "../components/BreadCrumb/BreadCrumb";
import {Post} from "../components/Post/Post";

export const NewPage: React.FC = () => {
    return(
        <Wrapper>
            <BreadCrumb/>
            <Post/>
        </Wrapper>
    )
};