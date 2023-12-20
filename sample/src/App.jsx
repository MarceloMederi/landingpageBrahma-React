import React, { useState } from 'react';
import './App.css';
import BrahmaDuploMalteImage from './image/duplo-malte.jpg';


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
        <img src={BrahmaDuploMalteImage} alt="Brahma Duplo Malte" />
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao2' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Black</p>
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao3' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Tostada</p>
      </div>
      <div className="apresentacao" style={{ display: selectedTab === 'apresentacao4' ? 'block' : 'none' }}>
        <p>Apresentação para Brahma Trigo</p>
      </div>
    </div>
  );
}

export default App;
