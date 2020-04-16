import React from "react";

export const Checkbox: React.FC = (props: any) => {
    const {children} = props;

    return (
            <label>
                <input required type="checkbox" id="scales" name="scales"/>
                {children}
            </label>
    );
};
