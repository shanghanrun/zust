
import './App.css';
import Counter from './components/Counter';
import Box from './components/Box';
import Movies from './components/Movies';
import Translate from './components/Translate';
import MultiTranslate from './components/MultiTranstlate';
import Drinks from './components/Drinks';
import DrinkTranslate from './components/DrinkTranslate';

function App() {
  return (
    <div className="App">
      <Counter />
      <Box />
      <Translate />
      <MultiTranslate />
      <Movies />
      <Drinks />
      <DrinkTranslate />
    </div>
  );
}

export default App;
