import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/headphones' element={ <Category page="headphones"/> } />
        <Route path='/speakers' element={ <Category page="speakers"/> } />
        <Route path='/earphones' element={ <Category page="earphones"/> } />
      </Routes>
    </div>
  );
}

export default App;
