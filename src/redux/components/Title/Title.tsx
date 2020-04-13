import React from "react";
import './Title.scss'

export const Title = (props: any) => {
    const {children} = props;

    const renderTitle = () => {
        let classes;
        switch (props.font) {
            case ('xxxlFontSize'):
                classes = 'title--xxxl-font-size';
                break;
            case ('xxlFontSize'):
                classes = 'title--xxl-font-size';
                break;
            case ('lgFontSize'):
                classes = 'title--lg-font-size';
                break;
            default:
                classes = 'title'
        }
        return <h3 className={classes}>
            {props.category}
            {children}
        </h3>;
    };

    return (
        <>{renderTitle()}</>
    )
};