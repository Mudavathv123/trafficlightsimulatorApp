import TrafficLight from './components/LightController/LightController';
import PedestrianButton from './components/PedestrianButton/PedestrianButton';
import LightController from './components/TrafficLights/TrafficLight';
import EmergencyButton from './components/EmergencyButton/EmergencyButton';
import Countdown from './components/Countdown/Countdown';
import { TrafficLightProvider } from './TrafficLightProvider';
import './App.css';

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
      <TrafficLight />
        <div className='btn-container'>
          <PedestrianButton />
          <EmergencyButton/>
        </div> 
        <Countdown/>
        <LightController />
      </div>
    </TrafficLightProvider>
  );
}

export default App;
