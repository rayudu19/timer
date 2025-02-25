import React from 'react';

const TimerControls = ({ isRunning, isPaused, onPause, onResume, onReset }) => {
  return (
    <div>
      {isRunning && !isPaused && (
        <button onClick={onPause}>Pause</button>
      )}
      {isPaused && (
        <button onClick={onResume}>Resume</button>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default TimerControls;
