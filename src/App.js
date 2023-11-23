
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';
import Genre from './pages/Genre/Genre';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import { useRef } from 'react';

function App() {
  const iframeRef = useRef(null)

  return (
    <div className="App">
      <Header iframeRef={iframeRef} />
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films/:id' element={<Film iframeRef={iframeRef} />} />
        <Route path='/genres/:genreId' element={<Genre />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
