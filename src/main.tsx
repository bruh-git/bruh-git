import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import Rotas from './routes/routes';
import GlobalStyle from './styles/global';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Rotas />
  </React.StrictMode>
)
