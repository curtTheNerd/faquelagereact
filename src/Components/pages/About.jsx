import React from 'react';
import AboutCards from '../AboutCards';

const About = () => {
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

      <AboutCards />
      
    </div>
  )
}

export default About
