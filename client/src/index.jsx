import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var listingId = location.pathname.replace(/\//g, '');
ReactDOM.render(<App listingId={listingId} />, document.getElementById('photo-gallery'));
