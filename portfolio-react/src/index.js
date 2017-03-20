import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import About from './About';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Footer from './Footer';
import PreFooter from './PreFooter';
import './style.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header-div')
);

ReactDOM.render(
  <Main />,
  document.getElementById('main-div')
);

ReactDOM.render(
  <About />,
  document.getElementById('about-div')
);

ReactDOM.render(
  <Portfolio />,
  document.getElementById('portfolio-div')
);

ReactDOM.render(
  <Contacts />,
  document.getElementById('contacts-div')
);

ReactDOM.render(
  <PreFooter />,
  document.getElementById('prefooter-div')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer-div')
);
