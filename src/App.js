import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
