import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {BreadCrumb} from "../components/BreadCrumb/BreadCrumb";
import NewPostComponent from "../components/NewPostComponent/NewPostComponent";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";

export const NewPage: React.FC = () => {

    return (
        <>
            <Wrapper>
                <BreadCrumb/>
                <NewPostComponent/>

                <InsideWrapper>
                    <CommentsBox/>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};