const styled = window.styled;

var ScrollbarDiv = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

var Thumbnail = styled.button`
  position: relative;
  height: 48px;
  width: 48px;
  cursor: pointer;
  outline: none;
  border: 0px;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0.7;
  margin: 0px 0px 0px 8px;
  :disabled {
    cursor: default;
    opacity: 1;
    box-shadow: rgb(72, 72, 72) 0px 0px 0px 2px;
  }
  :hover {
    opacity: 1;
  }
`;

var Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export {ScrollbarDiv, Thumbnail, Img};
