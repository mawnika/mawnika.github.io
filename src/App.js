// import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  return (
    <div className="home">
      
      <header className="navigation">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <h1 className="name-logo"> monica kawade</h1>
        <nav>
          <a className="nav-link" href="www.monicakawade.com">about</a>
          <p className='nav-space'>•</p>
          <a className="nav-link" href="www.monicakawade.com">resume</a>
        </nav>
      </header>

      <section className='home-hero-content'>
        
        <div className='hero-content'>
          <h2 className='hero-text'>A product designer that likes to do 
            <span style={{color: 'black',
              fontSize: 40,
              fontFamily: 'Iowan Old Style',
              fontWeight: '700',
              whiteSpace: 'normal'}}>
              {' '}something, something and something.
            </span>  
          </h2>

          <div className='roles'>
            <h3>Roles im looking for:</h3>
            <h3>UX Engineer, Product Designer</h3>
          </div>
        </div>

        <div className='mo-image'> 
          <img src="/assets/mon-profile.jpg" className="mo-actual-image" alt='Monica on a beach, hair blowing in the wind'></img>
        </div>
        
      </section>
    </div>
  );
}
export default App;
