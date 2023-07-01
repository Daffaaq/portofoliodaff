import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Beranda from './components/beranda';
import Tentang from './components/tentang';
import Kontak from './components/kontak';
import Portofolio from './components/portofolio';

const routes = [
  { path: '/', component: Beranda },
  { path: '/beranda', component: Beranda },
  { path: '/tentang', component: Tentang },
  { path: '/portofolio', component: Portofolio },
  { path: '/kontak', component: Kontak }
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </div>
    </BrowserRouter>
  );
};

export default App;
