import logo from './logo.svg';
import './App.css';
import Ball from './Ball'
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='mini lotto' maxNum={10} MaxBalls={4} />
    </div>
  );
}

export default App;
