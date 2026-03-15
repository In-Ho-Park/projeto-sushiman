import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useEffect, useState } from "react";
import Cardapio from "./components/Cardapio";
import Contato from "./components/Contato"; 
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Eventos from "./pages/eventos";
import Sobre from "./pages/sobre";  
import Galeria from "./pages/galeria";


function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cardapio")
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.error("Erro ao buscar o cardápio:", error));
  }, []);

  return(
  <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home itens={itens} />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Contato /> {/* Contato aparece em todas as páginas */}
    </Router>
  );
  }

export default App;
