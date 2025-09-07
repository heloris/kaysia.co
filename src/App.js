import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Emlak from "./pages/Emlak";
import Satinal from "./pages/Satinal";
import Haber from "./pages/Haber";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emlak" element={<Emlak />} />
      <Route path="/satinal" element={<Satinal />} />
      <Route path="/haber" element={<Haber />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
