import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var listingId = location.pathname.replace(/\//g, '');
ReactDOM.render(<App listingId={listingId} url={'http://localhost:3001'} />, document.getElementById('photo-gallery'));
