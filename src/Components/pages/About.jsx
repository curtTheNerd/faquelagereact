import React from 'react';
import { useState } from 'react';
import { AboutData as Data } from '../constants/Data';

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

      <section className="aboutSecContent">
        {
          Data.map(data => {
            return (
              <div key={data.id} className='aboutCard' onClick={() => openModal(data)}>
                <div className="aboutImageDiv">
                  <img src={data.imgSrc} alt={data.name} />
                </div> 

                <div className="aboutCardInfo">
                  <h4 className="aboutName">{data.name}</h4>
                  <h5 className="aboutInstrument">Instrument: {data.instrument}</h5>
                  <h5 className="aboutSkill">Skill: {data.skill}</h5>
                  <h5 className="aboutLink">Follow on Instagram: <a href={data.instaLink} className="aboutLinkName" target='_blank'>{data.linkName}</a></h5>
                </div>
              </div>
            )
          })
        }

        {
          showModal && (
            <div className="modal">
              <div className="modalCard">
                <div className="aboutImageDiv">
                  <img src={selectedData.imgSrc_m} alt={selectedData.name} />
                </div> 

                <div className="aboutCardInfo">
                  <h4 className="aboutName">{selectedData.name}</h4>
                  <h5 className="aboutInstrument">Instrument: {selectedData.instrument}</h5>
                  <h5 className="aboutSkill">Skill: {selectedData.skill}</h5>
                  <h5 className="modalTextAdd">{selectedData.modalTextAdd}</h5>
                  <h5 className="aboutLink">Follow on Instagram: <a href={selectedData.instaLink} className="aboutLinkName" target='_blank'>{selectedData.linkName}</a></h5>
                </div>
              </div>

              <span className="modalClose" onClick={closeModal}>&times;</span>
              <a className="modalPrev" onClick={handlePrev}>&#10094;</a>
              <a className="modalNext" onClick={handleNext}>&#10095;</a>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default About
