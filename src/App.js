import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Beranda from './components/beranda';
import Tentang from './components/tentang';
import Kontak from './components/kontak';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Beranda} />
        <Route exact path="/beranda" component={Beranda} />
        <Route path="/tentang" component={Tentang} />
        <Route path="/kontak" component={Kontak} />
      </div>
    </BrowserRouter>
  );
};

export default App;
