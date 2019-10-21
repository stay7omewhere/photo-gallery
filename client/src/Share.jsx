import React from 'react';
import styled from 'styled-components';

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

var closeXSvgPathDef = 'm23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22';
var shareMethods = [
  {
    name: 'Facebook',
    path: 'm8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78',
    viewBox: '0 0 32 32',
    url: 'http://www.facebook.com'
  },
  {
    name: 'Twitter',
    path: 'm31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16',
    viewBox: '0 0 32 32',
    url: 'https://twitter.com'
  },
  {
    name: 'Messenger',
    path: 'm17.59 19.95-4.07-4.35-7.95 4.35 8.74-9.28 4.17 4.35 7.85-4.35zm-1.59-19.95c-8.84 0-16 6.63-16 14.82 0 4.66 2.33 8.82 5.96 11.54v5.64l5.45-2.99a17.24 17.24 0 0 0 4.59.62c8.84 0 16-6.63 16-14.82 0-8.18-7.16-14.81-16-14.81z',
    viewBox: '0 0 32 32',
    url: 'https://messenger.com'
  },
  {
    name: 'Email',
    path: 'm17.42 18.99c.14-.12.86-.76 2.08-1.86l10.43 8.66h-27.76l10.35-8.67c1.24 1.1 1.98 1.74 2.12 1.85.83.65 1.93.63 2.78.02m11.89-10.67-4.83 4.34c-1.51 1.35-2.8 2.51-3.86 3.46l10.35 8.6c.01.01.01.02.02.03v-17.81c0-.04-.02-.07-.02-.11a3.73 3.73 0 0 0 -.08.07zm-25.19-.7a5347.74 5347.74 0 0 0 4.69 4.19c3.94 3.52 6.51 5.79 6.75 5.97a.76.76 0 0 0 .92.03c.21-.18 2.82-2.52 7.01-6.28l4.82-4.33 1.35-1.21h-27.37l.29.26zm3.66 5.28a4436.65 4436.65 0 0 1 -4.66-4.16c-.56-.5-1.07-.96-1.53-1.37l-.57-.51c0 .03-.01.05-.01.07v17.89l10.38-8.7c-1-.89-2.2-1.95-3.61-3.21',
    viewBox: '0 0 32 32',
    url: 'https://mail.google.com'
  },
  {
    name: 'Copy Link',
    path: 'm25.78 1.74c0 .41-.33.74-.74.74h-19.55v25.5a.74.74 0 1 1 -1.49 0v-25.75c0-.68.56-1.23 1.24-1.23h19.81c.41 0 .74.33.74.74zm3.22 3.46v25.76a.98.98 0 0 1 -.99.98h-19.8a.99.99 0 0 1 -.99-.98v-25.76c0-.54.44-.98.99-.98h19.81c.54 0 .99.45.99.98zm-17.82 3.47c0 .27.22.5.5.5h5.94a.49.49 0 1 0 0-.99h-5.94a.5.5 0 0 0 -.5.5zm13.86 13.87a.5.5 0 0 0 -.5-.5h-12.87a.49.49 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5zm0-3.96a.5.5 0 0 0 -.5-.5h-12.87a.5.5 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5zm0-3.96a.5.5 0 0 0 -.5-.5h-12.87a.5.5 0 1 0 0 .99h12.87a.5.5 0 0 0 .5-.5z',
    viewBox: '0 0 32 32',
    url: ''
  },
  {
    name: 'WhatsApp',
    path: 'm23.37 21.18c-.31.87-1.8 1.66-2.52 1.77-.65.1-1.46.14-2.35-.15a21.13 21.13 0 0 1 -2.13-.78c-3.74-1.61-6.19-5.36-6.38-5.61s-1.52-2.01-1.52-3.84.97-2.73 1.31-3.1.75-.46 1-.46.5 0 .71.01c.23.01.54-.09.84.64.31.75 1.06 2.57 1.15 2.76.09.18.16.4.03.65-.12.25-.19.4-.37.62-.19.22-.39.48-.56.65-.19.19-.38.39-.16.76s.97 1.59 2.08 2.58c1.43 1.26 2.63 1.66 3 1.84.37.19.59.16.81-.09s.93-1.09 1.18-1.46.5-.31.84-.19 2.18 1.02 2.55 1.21.62.28.72.43c.09.16.09.9-.22 1.77m3.26-15.82a14.88 14.88 0 0 0 -10.57-4.36c-8.23 0-14.94 6.67-14.94 14.87a14.78 14.78 0 0 0 1.99 7.43l-2.12 7.7 7.92-2.07a14.98 14.98 0 0 0 7.14 1.81h.01c8.23 0 14.93-6.67 14.94-14.87a14.74 14.74 0 0 0 -4.37-10.52',
    viewBox: '0 0 32 32',
    url: 'https://web.whatsapp.com/'
  },
  {
    name: 'SMS',
    path: 'm23.5 16.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-7.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7.5-14.5c-8.82 0-16 5.94-16 13.32 0 2.9 1.12 5.64 3.14 7.92l-.43 6.23a.5.5 0 0 0 .69.5l6.08-2.51c1.99.78 4.21 1.19 6.52 1.19 8.82 0 16-5.94 16-13.32s-7.18-13.33-16-13.33',
    viewBox: '0 0 32 32',
    url: ''
  },
  {
    name: 'Embed',
    path: 'm12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-4.19 14.05c.52.45.58 1.24.14 1.76-.25.29-.6.44-.95.44-.29 0-.58-.1-.81-.3l-3.5-3c-.28-.24-.44-.58-.44-.95s.16-.71.44-.95l3.5-3c .52-.45 1.31-.39 1.76.14.45.52.39 1.31-.14 1.76l-2.39 2.05zm6.88-6.69-3 10c-.16.54-.66.89-1.2.89-.12 0-.24-.02-.36-.05-.66-.2-1.04-.9-.84-1.56l3-10c .2-.66.9-1.04 1.56-.84s1.04.9.84 1.56zm3.12 8.59c-.52.45-1.31.39-1.76-.14s-.39-1.31.14-1.76l2.39-2.05-2.39-2.05c-.52-.45-.58-1.24-.14-1.76s1.24-.58 1.76-.14l3.5 3c .58.5.58 1.4 0 1.9z',
    viewBox: '0 0 24 24',
    url: ''
  }
];

var Share = function({closePopup}) {
  return (
    <ShareContainer>
      <ShareBackground onClick={closePopup}></ShareBackground>
      <SharePopup>
        <Close>
          <CloseButton onClick={closePopup}>
            <CloseX viewBox="0 0 24 24"><path d={closeXSvgPathDef}></path></CloseX>
          </CloseButton>
        </Close>
        <ShareText>Share</ShareText>
        <ShareMethods>
          {shareMethods.map(method => {
            return (
              <MethodContainer key={method.name}>
                <Method>
                  <MethodButton onClick={() => window.open(method.url)}>
                    <Icon viewBox={method.viewBox}> 
                      <path d={method.path}></path>
                    </Icon>
                    <span>{method.name}</span>
                  </MethodButton>
                </Method>
              </MethodContainer>
            );
          })}
        </ShareMethods>
      </SharePopup>
    </ShareContainer>
  );
};

export default Share;
