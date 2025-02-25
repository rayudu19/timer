import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0); 
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false); 

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  useEffect(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    document.title = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, [seconds]);

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setSeconds(0);
  };

  return (
    <div>
      <TimerDisplay seconds={seconds} />
      <TimerControls
        isRunning={isRunning}
        isPaused={isPaused}
        onPause={handlePause}
        onResume={handleResume}
        onReset={handleReset}
      />
    </div>
  );
};

export default Timer;