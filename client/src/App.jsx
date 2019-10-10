import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.listingId,
      photos: []
    }
  }

  render() {
    return (
      <div>
        {/* <div>First photo URL: {(this.state.photos[0]) && this.state.photos[0].url}</div> */}
        <img src={(this.state.photos[0]) ? this.state.photos[0].url : null} alt="castle"></img>
        <div>{(this.state.photos[0]) && this.state.photos[0].description}</div>
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

export default App;
