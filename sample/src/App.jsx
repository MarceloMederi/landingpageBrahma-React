import React, { useState } from 'react';
import './App.css';
import BrahmaDuploMalte from './image/duplo-malte.png';
import BrahmaDuploMalteBlack from './image/duplo-malte-black.png';
import BrahmaDuploMalteTostada from './image/duplo-malte-tostada.png';


function App() {
  const [selectedTab, setSelectedTab] = useState('apresentacao1');

  const handleTabClick = (target) => {
    setSelectedTab(target);
  };

  return (
    <div>
      <h1>Chegaram as novas Brahmas</h1>

      <nav className="nav">
        <ul>
          <li><a href="#" className={`tab ${selectedTab === 'apresentacao1' && 'active'}`} onClick={() => handleTabClick('apresentacao1')}>Brahma Duplo Malte</a></li>
          <li><a href="#" className={`tab ${selectedTab === 'apresentacao2' && 'active'}`} onClick={() => handleTabClick('apresentacao2')}>Brahma Black</a></li>
          <li><a href="#" className={`tab ${selectedTab === 'apresentacao3' && 'active'}`} onClick={() => handleTabClick('apresentacao3')}>Brahma Tostada</a></li>
          <li><a href="#" className={`tab ${selectedTab === 'apresentacao4' && 'active'}`} onClick={() => handleTabClick('apresentacao4')}>Brahma Trigo</a></li>
        </ul>
      </nav>

      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao1' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Duplo Malte</p>
        <img src={BrahmaDuploMalte} alt="Brahma Duplo Malte" />
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao2' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Black</p>
        <img src={BrahmaDuploMalteBlack} alt="Brahma Duplo Malte black" />
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao3' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Tostada</p>
        <img src={BrahmaDuploMalteTostada} alt="Brahma Duplo Malte Tostada" />
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao4' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Trigo</p>
      </div>
    </div>
  );
}

export default App;
