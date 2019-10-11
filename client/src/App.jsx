import React from 'react';
import $ from 'jquery';
import Preview from './Preview';
import Slideshow from './Slideshow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.listingId,
      photos: [{url: '', description: ''}],
      showSlideshow: false,
      currentPhotoIndex: 0
    };
    this.viewPhotoHandler = this.viewPhotoHandler.bind(this);
    this.closeSlideshow = this.closeSlideshow.bind(this);
  }

  render() {
    return (
      <div>
        {!this.state.showSlideshow && <Preview photos={this.state.photos} viewPhotoHandler={this.viewPhotoHandler} />}
        {this.state.showSlideshow && <Slideshow photos={this.state.photos} currentPhotoIndex={this.state.currentPhotoIndex} viewPhotoHandler={this.viewPhotoHandler} closeSlideshow={this.closeSlideshow} />}
      </div>
    );
  }

  componentDidMount() {
    // get photos data from server (reads from db)
    $.get(`/photos/${this.state.listingId}`, null, (photos) => {
      this.setState({photos: photos});
    }, 'json');
  }

  viewPhotoHandler(photoIndex = 0) {
    // render Slideshow component with specific photo 
    this.setState({
      showSlideshow: true,
      currentPhotoIndex: photoIndex
    });
  }

  closeSlideshow() {
    // reset to render Preview component
    this.setState({
      showSlideshow: false,
      currentPhotoIndex: 0
    });
  }

}

export default App;
