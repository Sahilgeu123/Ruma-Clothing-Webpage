import { useState } from 'react';
import Hero from './Hero';
import Detail from './Detail';
import ModelCanvas from './ModelCanvas';

function App() {
  const [detailBlurActive, setDetailBlurActive] = useState(false);

  return (
    <div className="app-shell">
      <ModelCanvas onBlurChange={setDetailBlurActive} />

      <div className="scroll-content">
        <Hero />
        <Detail blurActive={detailBlurActive} />
      </div>
    </div>
  );
}

export default App;
