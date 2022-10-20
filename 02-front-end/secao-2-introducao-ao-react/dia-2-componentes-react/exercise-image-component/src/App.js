import Image from './Image';
import cat from './cat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Image source={cat} alternativeText={'Cute cat staring'}/>
    </div>
  );
}

export default App;
