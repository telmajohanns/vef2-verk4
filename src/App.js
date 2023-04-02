import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentPage from './pages/DepartmentPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments/:slug' element={<DepartmentPage />} />
        <Route path='/departments/:slug/courses' element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
