import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {Title} from "../components/Title/Title";
import {FormBox} from "../components/FormBox/FormBox";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Title xxlFontSize> Comments </Title>
                <CommentsListComponent/>
                <FormBox/>
            </Wrapper>
        </>
    );
};
