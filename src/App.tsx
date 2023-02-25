import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue text-very-dark-blue dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="country/:name" element={<CountryDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
