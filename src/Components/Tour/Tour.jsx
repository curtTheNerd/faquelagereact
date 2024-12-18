import React from 'react';
import './tour.css';

const TourAktuell = [
  {
    id: 9,
    ort: 'New Dates coming soon!',
    datum: '',
    location: '',
    locationLink:'',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  }, 

]

const TourVergangenheit = [
  {
    id: 8,
    ort: 'Magdeburg',
    datum: '22.11.2024',
    location: 'Jazz Am Turm',
    locationLink:'https://jazzamturm.de/',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },

  {
    id: 6,
    ort: 'Bremen',
    datum: '16.11.2024',
    location: 'Chameleon Jazz Bar',
    locationLink:'',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },
  
  {
    id: 5,
    ort: 'Paderborn',
    datum: '15.11.2024',
    location: 'Black Sheep',
    locationLink:'',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  
  },  

  {
    id: 4,
    ort: 'Marburg',
    datum: '14.11.2024',
    location: 'Cavete',
    locationLink:'',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },  
  
  {
    id: 3,
    ort: 'Weimar',
    datum: '11.11.2024',
    location: 'Weimar C-Keller',
    locationLink:'http://www.c-keller.de/index.php?article_id=3313',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },

  {
    id: 2,
    ort: 'Ilmenau',
    datum: '10.11.2024',
    location: 'Kleinod',
    locationLink:'https://www.kleinod-ilmenau.de/?event=1499',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
    
  },

  {
    id: 1,
    ort: 'Hamburg',
    datum: '08.11.2024',
    location: 'Zinnschmelze',
    locationLink: '',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },

  {
    id: 7,
    ort: 'Cottbus',
    datum: '07.11.2024',
    location: 'Galerie Fango',
    locationLink:'https://www.fango.org/',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },
  
  {
    id: 8,
    ort: 'Leipzig',
    datum: '14.09.2024',
    location: 'Roots & Sprouts - Kulturnhalle',
    locationLink:'https://roots-and-sprouts.de/event/faquelage/',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },
  
  {
    id: 0,
    ort: 'Leipzig',
    datum: '15.03.2024',
    location: 'Leipjazzig Frühjahrsfestival',
    locationLink:'https://www.leipjazzig.de/fruehjahrsfestival/',
    optionalerText: '',
    optinalerLinkName: '',
    link: '',
  },

]


const Tour = () => {
  return (
    <div className="tour container">
      <h2 className='tourTitle'>Aktuelle Tour</h2>
      <section className="secContent">
        {
          TourAktuell.map(({id, ort, datum, location, locationLink, optionalerText, optionalerLinkName, link}) => {
            return (
              <div key={id} className='newsCard'>
                <div className="cardInfo">
                  <div className="cardTitle">
                    <h4 className="title">{ort}</h4>
                    <h4 className="date">{datum}</h4>
                  </div>
                  <h5><a href={locationLink} className="location" target='_blank'>{location}</a></h5>
                  <h5 className="text">{optionalerText}</h5>
                  <h5><a href={link} className="location" target='_blank'>{optionalerLinkName}</a></h5>
                </div>
              </div>
            )
          })
        }
      </section>

      <h2 className='tourTitle'>Vergangene Shows</h2>
      <section className="secContent">
        {
          TourVergangenheit.map(({id, ort, datum, location, locationLink, optionalerText, optionalerLinkName, link}) => {
            return (
              <div key={id} className='newsCard'>
                <div className="cardInfo">
                  <div className="cardTitle">
                    <h4 className="title">{ort}</h4>
                    <h4 className="date">{datum}</h4>
                  </div>
                  <h5><a href={locationLink} className="location" target='_blank'>{location}</a></h5>
                  <h5 className="text">{optionalerText}</h5>
                  <h5><a href={link} className="location" target='_blank'>{optionalerLinkName}</a></h5>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Tour