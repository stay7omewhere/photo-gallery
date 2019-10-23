const styled = window.styled;

var ShareContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  background: transparent;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

var ShareBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  min-height: 100vh;
`;

var SharePopup = styled.div`
  width: 376px;
  height: 764px;
  margin-top: 64px;
  margin-bottom: 64px;
  background-color: white;
  z-index: 3;
`;

var Close = styled.div`
  width: 312px;
  height: 21px;
  margin: 32px 32px 24px 32px;
`;

var CloseButton = styled.button`
  width: 16px;
  height: 16px;
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 0px;
`;

var CloseX = styled.svg`
  width: 16px;
  height: 16px;
  fill: rgb(118, 118, 118);
  fill-rule: evenodd;
`;

var ShareText = styled.div`
  width: 312px;
  height: 30px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25em;
  color: rgb(72, 72, 72);
`;

var ShareMethods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

var MethodContainer = styled.div`
  width: 312px;
  height: 76px;
`;

var Method = styled.div`
  width: 312px;
  height: 26px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
`;

var MethodButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 0px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600px;
  color: #008489;
`;

var Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: rgb(72, 72, 72);
  fill-rule: evenodd;
  margin-right: 8px;
`;

export {ShareContainer, ShareBackground, SharePopup, Close, CloseButton, CloseX, ShareText, ShareMethods, MethodContainer, Method, MethodButton, Icon};
