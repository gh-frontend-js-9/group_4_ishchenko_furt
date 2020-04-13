import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {Title} from "../components/Title/Title";
import {FormBox} from "../components/FormBox/FormBox";
import {OutlineButton} from "../components/OutlineButton/OutlineButton";
import {Content} from "../components/Content/Content";
import NewPostComponent from "../components/NewPostComponent/NewPostComponent";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <NewPostComponent/>
                <div>
                    <Title font={'xxlFontSize'}> Comments </Title>
                    <OutlineButton >
                        Leave a Comment
                    </OutlineButton>
                </div>
                <Content>Comment policy: We love comments and appreciate the time that readers spend to share ideas and
                    give feedback.
                    However, all comments are manually moderated and those deemed to be spam or solely promotional will
                    be deleted.
                </Content>
                <CommentsListComponent/>
                <FormBox/>
            </Wrapper>
        </>
    );
};
