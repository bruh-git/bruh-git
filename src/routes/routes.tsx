import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from '../pages/Contact';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Tech from '../pages/Tech';


function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/tech" element={ <Tech /> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default Rotas;