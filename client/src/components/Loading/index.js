import React from 'react';

import loader from '../../assets/loader.gif';

const Loading = ({ backgroundColor, widthLoader = 200, paddingVertical }) => (
  <div
  className="container"
    style={{
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical,
      background: `${backgroundColor}`,
    }}
  >
    <img src={loader} alt="Loading" style={{ width: widthLoader, margin: 'auto'}} />
  </div>
);

export default Loading;
