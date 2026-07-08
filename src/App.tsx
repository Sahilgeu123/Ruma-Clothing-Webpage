import Hero from './Components/Hero';
import Detail from './Components/Collection';
import ModelCanvas from './ModelCanvas';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app-shell">
      <ModelCanvas />

      <div className="scroll-content">
        <Navbar/>
        <Hero />
        <Detail />
      </div>
    </div>
  );
}

export default App;
