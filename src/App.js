import './App.css';
import Footer from './components/Footer/Footer';
import Hashing from './components/Hashing/Hashing';
import Head from './components/Head/Head';
import Need from './components/Need/Need';
import Partners from './components/Partners/Partners';
import Portfolio from './components/Portfolio/Portfolio';
import Together from './components/Together/Together';

function App() {
  return (
    <div className="App">
      <Head />
      <Partners />
      <Need />
      <Hashing />
      <Together />
      <Footer />
    </div>
  );
}

export default App;

/*
      <Head />
      <Partners />
      <Portfolio />
      <Need />
      <Hashing />
      <Together />
      <Footer />

      */