import React from 'react';
import styles from './share.css';

var Share = function({closePopup}) {
  var shareMethods = ['Facebook', 'Twitter', 'Messenger', 'Email', 'Copy Link', 'WhatsApp', 'SMS', 'Embed'];
  return (
    <div className={styles.shareContainer} onClick={closePopup}>
      <div className={styles.sharePopup}>
        <button onClick={closePopup}>X</button>
        <div>Share</div>
        <div className={styles.shareMethods}>
          {shareMethods.map(method => {
            return (
              <div>{method}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Share;
