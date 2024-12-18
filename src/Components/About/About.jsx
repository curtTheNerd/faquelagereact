import React from 'react';
import { useState } from 'react';
import './about.css';

import img1 from '../Assets/Panter fabix.jpg'
import img1_m from '../Assets/Fabix.jpg'
import img2 from '../Assets/raphapuss.jpg'
import img2_m from '../Assets/Raphael.jpg'
import img3 from '../Assets/hase richy.jpg'
import img3_m from '../Assets/Richy.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    imgSrc_m: img1_m,
    name: 'Fabian Hentschel',
    instrument: 'E-Gitarre',
    skill: 'Pink Panther',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/fabixhalentine/',
    linkName: 'Fabix Halentine'
  },

  {
    id: 2,
    imgSrc: img2,
    imgSrc_m: img2_m,
    name: 'Raphael Seidel',
    instrument: 'E-Bass',
    skill: 'Oktobass',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/raphael.seidel/',
    linkName: 'Raphael Seidel'
  },

  {
    id: 3,
    imgSrc: img3,
    imgSrc_m: img3_m,
    name: 'Richard Holzapfel',
    instrument: 'Percussion',
    skill: 'Hasenpfote',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/richy.rose.music/p/CStYDRbMX3B/?img_index=1',
    linkName: 'Richy Rose'
  }
]



const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleNext = () => {
    const currentIndex = Data.findIndex(data => data.id === selectedData.id);
    const nextIndex = (currentIndex + 1) % Data.length;
    setSelectedData(Data[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = Data.findIndex(data => data.id === selectedData.id);
    const prevIndex = (currentIndex - 1 + Data.length) % Data.length;
    setSelectedData(Data[prevIndex]);
  };

  return (
    <div className="container about">
      <h2 className="aboutTitle">About</h2>
      <section>
            <p className='presseText1'>Faquelage [faklaʒ] - dieses französische Kunstwort erdachte sich das Leipziger Trio, um in kleiner Besetzung große Melodien 
            zu spielen. Angefangen hat alles mit bekannten und weniger bekannten Titeln aus der Filmmusik. Inzwischen reisen die drei jungen 
            Musizierenden auch in  ihren Eigenkompositionen in fantastische Welten und Traumlandschaften und gestalten diese durch  spontane 
            Improvisationen nach Lust und Laune neu. 
            Der Sound einer kernigen Strat, gepaart mit den warmen Klängen eines Fretless Basses und diversen Percussion Instrumenten, ergeben 
            ein einmaliges Klangerlebnis.</p><br></br>
            <p className='presseText2'>"Faquelage [faklaʒ] - Dem Ensemble von Gitarre (Fabian Hentschel), Bass (Raphael Seidel) und 
            Perkussion (Richard Holzapfel) zuzuhören ist wie guter Unterricht sein sollte: Eine warme, einladende 
            Atmosphäre, gut zu folgende Ausführungen, die im gleichen Maße fordern wie fördern und ein 
            Gefüge, in dem sich Zuhörende nicht unterstellt, sondern abgeholt fühlen. Ohne Stress mit viel Raum 
            für Interesse und Erkundungen, ohne Zwang ganz natürlich den Klang- und Vorstellungsraum zu 
            untersuchen und zu erweitern.
            All das erreichen die drei durch sehr liebevolle, offene und charmante Ankündigungstexte, sowie 
            durch komplexe, aber unprätentiöse Rhythmen die mit schönen Melodien harmonisch gebettet 
            werden – immer wieder wird neues gezeigt, ohne es als Überraschung oder Neuigkeit zu 
            präsentieren, sondern dadurch, dorthin mitgenommen zu werden.
            Vor allem aber zeichnen sich die drei durch ein exzellentes Zusammenspiel aus. Es wirkt, als spielen 
            sie nicht nur miteinander, es ist, als wären sie in ständiger Resonanz zueinander.
            Faquelage lädt zu Abenden ein, die verfrickelte Komponierende, Musiker:innen, als auch Menschen, 
            die noch nie ein Instrument angefasst haben, genießen können."</p>
            <p className='presseText2'>Arne Herrmann - Komponist</p><br></br>
      </section>

      <section className="secContent grid">
        {
          Data.map(data => {
            return (
              <div key={data.id} className='aboutCard' onClick={() => openModal(data)}>
                <div className="imageDiv">
                  <img src={data.imgSrc} alt={data.name} />
                </div> 

                <div className="cardInfo">
                  <h4 className="name">{data.name}</h4>
                  <h5 className="instrument">Instrument: {data.instrument}</h5>
                  <h5 className="skill">Skill: {data.skill}</h5>
                  <h5 className="link">Follow on Instagram: <a href={data.instaLink} className="linkName" target='_blank'>{data.linkName}</a></h5>
                </div>
              </div>
            )
          })
        }

        {
          showModal && (
            <div className="modal">
              <div className="modalCard">
                <div className="imageDiv">
                  <img src={selectedData.imgSrc_m} alt={selectedData.name} />
                </div> 

                <div className="cardInfo">
                  <h4 className="name">{selectedData.name}</h4>
                  <h5 className="instrument">Instrument: {selectedData.instrument}</h5>
                  <h5 className="skill">Skill: {selectedData.skill}</h5>
                  <h5 className="modalTextAdd">{selectedData.modalTextAdd}</h5>
                  <h5 className="link">Follow on Instagram: <a href={selectedData.instaLink} className="linkName" target='_blank'>{selectedData.linkName}</a></h5>
                </div>
              </div>

              <span className="close" onClick={closeModal}>&times;</span>
              <a className="prev" onClick={handlePrev}>&#10094;</a>
              <a className="next" onClick={handleNext}>&#10095;</a>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default About
