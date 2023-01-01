import logo from './logo.svg';
import './App.css';
import Nut from '../src/assets/R.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <h2>
          Here's a picture of Totam's MASSIVE Nut!!
        </h2>
        <div className="nut">
        <img src={Nut} alt="Nutsack" width="500" height="500"/>
        </div>
      </div>
    </div>
  );
}

export default App;
