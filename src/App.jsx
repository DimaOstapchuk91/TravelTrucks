import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { Toaster } from 'react-hot-toast';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CamperPage from './pages/CamperPage/CamperPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Features from './components/Features/Features.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<CamperPage />}>
          <Route index element={<Features />} />
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
