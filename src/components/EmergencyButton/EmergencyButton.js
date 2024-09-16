import React from 'react';
import { useTrafficLight } from '../../TrafficLightProvider';
import './emergencyButton.css'

const EmergencyButton = () => {
  const { dispatch } = useTrafficLight();

  const emergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button className = "emergencyBtn" onClick={emergencyOverride} type ='Button' >
      Emergency Override
    </button>
  );
};

export default EmergencyButton;
