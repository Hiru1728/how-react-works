import React, { useState } from 'react';
import { useEffect } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
        // console.log(steps);
    }
    // Defend on Steps
    // useEffect(() => {

    //     console.log(steps);

    // }, [steps])

    return (
        <div style={{ border: '2px solid purple', margin: '20px', padding: '5px' }}>
            <h3>Steps Count: {steps}</h3>
            <button onClick={increaseSteps}>Running</button>
            <Display name="garmin" steps={steps} ></Display>
        </div>
    );
};

export default Watch;