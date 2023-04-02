import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/departments/:slug' element={<Department />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
