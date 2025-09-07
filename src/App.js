import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// pages klasöründeki dosyaları import et
import Home from './pages/Home';
import Emlak from './pages/Emlak';
import Satinal from './pages/Satinal';
import Haber from './pages/Haber';
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
          <Route path="/satinal" element={<Satinal />} />
          <Route path="/haber" element={<Haber />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
