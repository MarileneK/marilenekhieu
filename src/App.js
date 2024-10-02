import './App.css';

import Description from './components/Description';
import Navigation from './components/Navigation';

function App() {
  return (
    <div id="app-background">
      <Navigation />
      <Description />
      <p>Discover a little bit about me!</p>
    </div>
  );
}

export default App;
