const styled = window.styled;

var PreviewDiv = styled.div`
  margin: 80px 0 0 0;
  height: 47vh;
  position: relative;
`;

var ListingActions = styled.div` {
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 24px;
`;

var ArrowBox = styled.svg`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  fill-opacity: 0;
  stroke: rgb(72, 72, 72);
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

var Heart = styled.svg`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  fill-opacity: ${props => props.saved ? 1 : 0};
  fill: ${props => props.saved ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)'};
  stroke: ${props => props.saved ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)'};
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

var Button = styled.button`
  cursor: pointer;
  outline: none;
  color: #484848;
  padding: 6px 15px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 450;
  line-height: 22px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  border-radius: 4px;
  border-color: transparent;
`;

var ShareListing = styled(Button)`
  margin-right: 18px;
`;

var SaveListing = styled(Button)`
  right: 0px;
`;

var ViewPhotos = styled(Button)`
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 24px;
`;
ViewPhotos.displayName = 'ViewPhotos';

var PhotosContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  :hover > * {
    filter: brightness(70%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  :hover > *:hover {
    filter: brightness(100%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  `;

var PrimaryImg = styled.div`
  height: 47vh;
  width: 67%;
  overflow: hidden;
  outline: 1px solid rgb(72, 72, 72);
  border-left: 1px solid rgb(72, 72, 72);
  border-right: 1px solid rgb(72, 72, 72);
`;

var Img = styled.img`
  max-width: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  :hover {
    transform: scale(1.05);
    transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;
Img.displayName = 'image';

var SecondaryImgsContainer = styled.div`
  height: 47vh;
  width: 33%;
  display: flex;
  flex-direction: column;
  position: relative;
  :hover > * {
    filter: brightness(70%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  :hover > *:hover {
    filter: brightness(100%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

var SecondaryImg = styled.div`
  height: 50%;
  overflow: hidden;
  outline: 1px solid rgb(72, 72, 72);
  border-left: 1px solid rgb(72, 72, 72);
  border-right: 1px solid rgb(72, 72, 72);
`;

export {PreviewDiv, ListingActions, ArrowBox, Heart, ShareListing, SaveListing, ViewPhotos, PhotosContainer, PrimaryImg, Img, SecondaryImgsContainer, SecondaryImg};
