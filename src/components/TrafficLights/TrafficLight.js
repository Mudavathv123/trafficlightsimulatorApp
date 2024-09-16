import { useTrafficLight } from '../../TrafficLightProvider';
import './TrafficLight.css';

const TrafficLight = () => {
  const { state } = useTrafficLight();

  return (
    <div className="traffic-light">
      <div className={`light red ${state.currentLight === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${state.currentLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${state.currentLight === 'green' ? 'active' : ''}`}></div>
    </div>
  )
};

export default TrafficLight;
