import React from 'react';
import './index.css';

const ProgressBar = ({ timeLeft, totalTime }) => {
    const progressPercentage = ((totalTime - timeLeft) / totalTime) * 100;

    return (
        <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
