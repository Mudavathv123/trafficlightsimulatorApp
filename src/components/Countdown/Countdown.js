import React, { useEffect, useState } from 'react';
import { useTrafficLight } from '../../TrafficLightProvider';
import './countdown.css'; 

const Countdown = () => {
  const { state } = useTrafficLight();
  const [remainingTime, setRemainingTime] = useState(state.timer[state.currentLight]);

  useEffect(() => {
    setRemainingTime(state.timer[state.currentLight]);

    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [state.currentLight, state.timer]);

  return <div className='countdounText'>Time remaining: <span className='count'> {remainingTime}</span> seconds</div>;
};

export default Countdown;
