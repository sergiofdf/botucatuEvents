import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './assets/styles/global';
import Header  from './assets/components/Header'
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import Reservas from './pages/Reservas';
import CadastroEvento from './pages/CadastroEvento';
import CadastroReservas from './pages/CadastroReservas';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/cadastroEventos" element={<CadastroEvento />} />
        <Route path="/cadastroReservas" element={<CadastroReservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
