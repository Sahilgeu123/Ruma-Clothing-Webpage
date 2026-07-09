import Hero from './Components/Hero';
import Collection from './Components/Collection';
import ModelCanvas from './ModelCanvas';
import Navbar from './Components/Navbar';
import Detail from './Components/Detail';
import Final from './Components/Final';

function App() {
  return (
    <div className="app-shell">
      <ModelCanvas />

      <div className="scroll-content">
        <Navbar />
        <Hero />
        <Collection />
        <Detail />
        <Final/>
      </div>
    </div>
  );
}

export default App;
