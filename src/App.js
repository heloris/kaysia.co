import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// pages klasöründeki dosyaları import et
import Home from './pages/Home';
import Emlak from './pages/Emlak';
import Kartvizit from './pages/Kartvizit';
import HaberIndex from './pages/HaberIndex';
import HaberSlug from './pages/HaberSlug';
import Satinal from './pages/Satinal';
import Form from './pages/Form';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emlak" element={<Emlak />} />
          <Route path="/kartvizit" element={<Kartvizit />} />
          <Route path="/haber" element={<HaberIndex />} />
          <Route path="/haber/:slug" element={<HaberSlug />} />
          <Route path="/satinal" element={<Satinal />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
