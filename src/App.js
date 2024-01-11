import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.scss';
import Home from './App/pages/Home';
import MainLayout from './App/components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
