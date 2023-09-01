import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/products/:productId" component={Product} />
      </Routes>
    </div>
  );
}

export default App;
