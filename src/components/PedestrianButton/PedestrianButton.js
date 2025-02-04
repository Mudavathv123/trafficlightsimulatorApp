import { useTrafficLight } from '../../TrafficLightProvider';
import './pedestrianButton.css';

const PedestrianButton = () => {
  const { dispatch } = useTrafficLight();

  const requestCrossing = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return <button onClick={requestCrossing} className='requestBtn' >Pedestrian Crossing</button>;

};
export default PedestrianButton;
