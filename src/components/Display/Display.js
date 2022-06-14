import React from 'react';

const Display = (props) => {
    return (
        <div style={{border:'2px solid green',borderRadius:'10px',margin:'15px'}}>
            <h2>Name: {props.name}</h2>
            <p> The steps: {props.steps}</p>
        </div>
    );
};

export default Display;