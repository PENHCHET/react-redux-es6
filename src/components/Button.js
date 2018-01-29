import React from 'react';

let defaultClasses = 'mui-btn mui-btnraised mui-btn — primary';
const Button = (props) => (
    <button
        onClick={props.onClick}
        className={props.className}
        className={defaultClasses}
    >
        {props.text}
    </button>
)

export default Button;