import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import './css/style.css';
import './js/script.js';

const App = () => {
  return (
    <div>
      <Particles className="background" options={particlesOptions}/>
    </div>
  );
};

export default App;
