
import { Fragment } from 'react';
import { useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/companies/Companies';
import Residenciess from './components/Residencies/Residencies';
import Valuee from './components/value/Value';
import Contactt from './components/Contact/Contact';


import Footer from './components/Footer/Footer';
import GetStartt from './components/GetStart/GetStart';



function App() {

  const Residencies = useRef(null);
  const Value = useRef(null);
  const Contact = useRef(null);
  const GetStart = useRef(null);


  return (
    <Fragment>
      <div className="App">
        <div className='white-gradient'></div>
        <Header one={Residencies} two={Value} three={Contact} four={GetStart} />
        <Hero />
        <Companies />
        <Residenciess ref={Residencies} />
        <Valuee ref={Value} />
        <Contactt ref={Contact} />
        <GetStartt ref={GetStart} />

        <Footer />
      </div>
    </Fragment>
  )
}

export default App;
