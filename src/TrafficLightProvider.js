import { createContext, useReducer, useContext } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green', 
  pedestrianRequested: false,
  timer: { green: 10, yellow: 3, red: 7 }, 
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequested: true };
    case 'RESET_TIMER':
      return { ...state, timer: action.payload };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, currentLight: 'green', pedestrianRequested: false };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);
  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLight = () => useContext(TrafficLightContext);
