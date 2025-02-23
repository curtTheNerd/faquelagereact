import newsImg1 from '../../Assets/pictures/PlaceHolder_square_1.jpg'
import newsImg2 from '../../Assets/pictures/Album_Cover_Questions.jpg'
import newsImg3 from '../../Assets/pictures/Logo_square.jpg'

import aboutImg1 from '../../Assets/pictures/About_Panther_Fabix.jpg'
import aboutImg1_m from '../../Assets/pictures/About_Portrait_Fabix.jpg'
import aboutImg2 from '../../Assets/pictures/About_RaphaPuss.jpg'
import aboutImg2_m from '../../Assets/pictures/About_Portrait_Raphael.jpg'
import aboutImg3 from '../../Assets/pictures/About_Hase_Richy.jpg'
import aboutImg3_m from '../../Assets/pictures/About_Portrait_Richy.jpg'



export const TourAktuell = [
    {
      id: 11,
      ort: 'no dates available',
      datum: '',
      location: '',
      locationLink:'',
      optionalerText: '',
      optinalerLinkName: '',
      link: '',
    }, 
];
  

export const TourVergangenheit = [
    {
      id: 10,
      ort: 'Erfurt',
      datum: '21.02.2025',
      location: 'Jazzclub Erfurt',
      locationLink:'https://www.jazzclub-erfurt.de/?b=1000077&c=ED1000281&s=djEt9gQNjql_lWVWsEcmByoZ0pOUh9_gIMuqJtfYYfUwimE=',
      optionalerText: '',
      optinalerLinkName: '',
      link: '',
    }, 

    {
      id: 9,
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
];


export const NewsData = [
  {
    id: 3, 
    imgSrc: newsImg3,
    title: 'Last Concert',
    subtitle: 'Erfurt, 21.02.2025',
    text: '',
    link: 'https://www.jazzclub-erfurt.de/?b=1000077&c=ED1000281&s=djEt9gQNjql_lWVWsEcmByoZ0pOUh9_gIMuqJtfYYfUwimE=',
    linkName: 'JazzClub Erfurt'
  },

  {
    id: 1,
    imgSrc: newsImg1,
    title: 'Album out now!',
    subtitle: '',
    text: 'Order via Bandcamp',
    link: 'https://faquelage.bandcamp.com/album/questions',
    linkName: 'CD Bestellen'
  },

  {
    id: 2,
    imgSrc: newsImg2,
    title: 'Featured Video',
    subtitle: '',
    text: '... and further content on Youtube!',
    link: 'https://www.youtube.com/watch?v=OXdOKobg5sA&list=PLLki_nU8n8w3MZEAN4uta_8cCAejmJHkn',
    linkName: 'Shapes in the Water'
  },
];


export const AboutData = [
  {
    id: 1,
    imgSrc: aboutImg1,
    imgSrc_m: aboutImg1_m,
    name: 'Fabian Hentschel',
    instrument: 'E-Gitarre',
    skill: 'Pink Panther',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/fabixhalentine/',
    linkName: 'Fabix Halentine'
  },

  {
    id: 2,
    imgSrc: aboutImg2,
    imgSrc_m: aboutImg2_m,
    name: 'Raphael Seidel',
    instrument: 'E-Bass',
    skill: 'Oktobass',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/raphael.seidel/',
    linkName: 'Raphael Seidel'
  },

  {
    id: 3,
    imgSrc: aboutImg3,
    imgSrc_m: aboutImg3_m,
    name: 'Richard Holzapfel',
    instrument: 'Percussion',
    skill: 'Hasenpfote',
    modalTextAdd: '',
    instaLink: 'https://www.instagram.com/richy.rose.music/p/CStYDRbMX3B/?img_index=1',
    linkName: 'Richy Rose'
  }
];