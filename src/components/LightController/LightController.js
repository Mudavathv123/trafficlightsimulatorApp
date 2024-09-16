import { useEffect } from 'react';
import { useTrafficLight } from '../../TrafficLightProvider';

const LightController = () => {
  const { state, dispatch } = useTrafficLight();

  useEffect(() => {
    const handleLightChange = () => {
      let nextLight;
      switch (state.currentLight) {
        case 'green':
          nextLight = 'yellow';
          break;
        case 'yellow':
          nextLight = 'red';
          break;
        case 'red':
          nextLight = state.pedestrianRequested ? 'red' : 'green';
          break;
        default:
          nextLight = 'green';
      }

      if (state.currentLight === 'red' && state.pedestrianRequested) {
        setTimeout(() => {
          dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
          dispatch({ type: 'REQUEST_CROSSING', payload: false });
        }, 5000); // Extra 5 seconds for pedestrians
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: nextLight });
      }
    };

    const interval = setInterval(handleLightChange, state.timer[state.currentLight] * 1000);

    return () => clearInterval(interval);
  }, [state.currentLight, state.pedestrianRequested]);

  return null;
};

export default LightController;
