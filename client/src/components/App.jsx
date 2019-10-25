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
      showShare: false,
      currentPhotoIndex: 0
    };
    this.viewPhotoHandler = this.viewPhotoHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showPopup = this.showPopup.bind(this);
  }

  render() {
    return (
      <div>
        {!this.state.showSlideshow && <Preview photos={this.state.photos} viewPhotoHandler={this.viewPhotoHandler} showShare={this.state.showShare} closePopup={this.closeModal} showPopup={this.showPopup} />}
        {this.state.showSlideshow && <Slideshow photos={this.state.photos} currentPhotoIndex={this.state.currentPhotoIndex} viewPhotoHandler={this.viewPhotoHandler} closeSlideshow={this.closeModal} />}
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

  closeModal() {
    // reset to render Preview component
    this.setState({
      showSlideshow: false,
      showShare: false,
      currentPhotoIndex: 0
    });
  }

  showPopup(showPopup) {
    var newState = {};
    newState[showPopup] = true;
    this.setState(newState);
  }

}

export default App;
