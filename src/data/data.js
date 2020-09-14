import CIA from '../assets/CIA.png';
import FMF from '../assets/FMF.png';
import RWP from '../assets/RWP.png';
import RAS from '../assets/RAS.png';
import CPT from '../assets/CPT.png';
import MPW from '../assets/MPW.png';

export const projectData = [
  {
    name: 'Coding Interview App',
    explanation: 'Currently under construction. This application will streamline the technical interview process and collect progress data which interviewers can review.',
    image: CIA,
    githubLink: 'https://github.com/jmtss20/codingInterviewApp',
    liveDemoLink: '',
    techStack: ['TypeScript','React','Redux','Node.js','Express','MongoDB','Sockets','Sass'],
    apis: []
  },
  {
    name: 'Find My Friends',
    explanation:
      'Mobile first application that uses Google Maps, Google Places, and HTML5 Geolocation tracking to help find a local place to go to with friends.',
    image: FMF,
    githubLink: 'https://github.com/mdoudy90/find-my-friends',
    liveDemoLink: 'https://stormy-meadow-54442.herokuapp.com/',
    techStack: ['JavaScript','React','Node.js','Express','MongoDB','Sass'],
    apis: ['HTML Geolocation','Google Maps','Google Places']
  },
  {
    name: 'Retail Web Portal',
    explanation:
      'This client-facing web portal was built out by a team of 3 devs over a span of 2 weeks following a 26 page business requirements document.',
    image: RWP,
    githubLink: 'https://github.com/mdoudy90/Retail-Web-Portal',
    liveDemoLink: 'http://agile-ocean-70740.herokuapp.com/',
    techStack: ['JavaScript','React','Redux','Node.js','Express','Sass'],
    apis: ['Preexisting Headless']
  },
  {
    name: 'Reviews API Service',
    explanation:
      'Scalable RESTful API service built for a retail web-portal and optimized to handle web-scale traffic.',
    image: RAS,
    githubLink: 'https://github.com/HR-SDC-CANOPUS/Reviews-API',
    liveDemoLink: '',
    techStack: ['JavaScript','Node.js','Express','Postgres','Redis','Docker'],
    apis: []
  },
  {
    name: 'Crypto Paper Trader',
    explanation:
      'This cryptocurrency paper trading app was built during a mini-hackathon over a span of 3 days and eventually migrated from JavaScript to TypeScript.',
    image: CPT,
    githubLink: 'https://github.com/mdoudy90/Crypto-Paper-Trader',
    liveDemoLink: 'https://cryptic-crag-78444.herokuapp.com/',
    techStack: ['TypeScript','React','Node.js','Express','MongoDB'],
    apis: ['CryptoCompare']
  },
  {
    name: 'Portfolio Website',
    explanation: 'Inception! This website was built with love. Hope you like it!',
    image: MPW,
    githubLink: 'https://github.com/mdoudy90/mdoudy.com',
    liveDemoLink: '',
    techStack: ['JavaScript','React','Node.js','Express','Sass'],
    apis: []
  },
];