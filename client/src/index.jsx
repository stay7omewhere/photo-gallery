import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: props.listingId,
      photos: []
    }
  }

  render() {
    return (
      <div>
        <div>Listing ID: {this.state.listingId}</div>
        <div>First photo URL: {(this.state.photos[0]) && this.state.photos[0].url}</div>
        <div>First photo description: {(this.state.photos[0]) && this.state.photos[0].description}</div>
      </div>
    )
  }

  componentDidMount() {
    $.get(`/photos/${this.state.listingId}`, null, (photos) => {
      console.log('photos received for listing', photos);
      this.setState({photos: photos});
    }, 'json');
  }

}

ReactDOM.render(<App listingId={0} />, document.getElementById('photo-gallery'));
