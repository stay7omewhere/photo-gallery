import styled from 'styled-components';

var Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  outline: none;
  height: 88px;
  width: 88px;
  border: 0px;
`;

var CloseX = styled.svg`
  margin: 0 auto;
  height: 24px;
  width: 24px;
  fill: rgb(72, 72, 72);
`;

var ImgPanel = styled.div`
  height: 55vh;
  padding: 40px;
`;

var ImgPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

var Img = styled.img`
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  border-radius: 16px;
  height: 55vh;
  max-width: 85%;
`;

var Direction = styled.button`
  cursor: pointer;
  outline: none;
  height: 55vh;
  width: 50%;
  border: 0px;
`;

var PreviousArrow = styled.svg`
  float: left;
  height: 24px;
  width: 24px;
  margin: 0 auto 0 20px;
  fill: rgb(72, 72, 72);
`;

var NextArrow = styled.svg`
  float: right;
  height: 24px;
  width: 24px;
  margin: 0 20px 0 auto;
  fill: rgb(72, 72, 72);
`;

var ScrollbarDiv = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  height: 64px;
`;

var ImgText = styled.div`
  max-width: 80%;
  margin: 15px auto 0;
  color: rgb(72, 72, 72);
  font-size: 16px;
  line-height: 1.375em;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

var ImgOrder = styled.div`
  font-weight: 400;
`;

var ImgDescription = styled.div`
  margin: 15px auto 0;
  font-weight: 200;
`;

export {Close, CloseX, ImgPanel, ImgPanelContainer, Img, Direction, PreviousArrow, NextArrow, ScrollbarDiv, ImgText, ImgOrder, ImgDescription};
