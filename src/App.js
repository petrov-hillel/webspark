import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import CardsWrapper from './components/CardsWrapper/CardsWrapper';
import { Loader } from './components/Loader/Loader';
import shapeTop from './assets/shape-top.svg';
import shapeBottom from './assets/shape-bottom.svg';
import logo from './assets/logo.svg';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader logoSrc={logo} />
      ) : (
        <div className="App">
          <div className="shape-top">
            <img src={shapeTop} alt="ShapeTop" />
          </div>
          <Header />
          <CardsWrapper />
          <div className="shape-bottom">
            <img src={shapeBottom} alt="ShapeBottom" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
