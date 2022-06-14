import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps]= useState(0);
    const increaseSteps=()=>{
        const newSteps= steps+1;
        setSteps(newSteps);
    }

    return (
        <div style={{border:'2px solid red',borderRadius:'10px',margin:'15px'}}>
            <h2>This is my smart watch.</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Run....</button>
            <Display name="Casio" steps={steps}></Display>
        </div>
    );
};

export default Watch;