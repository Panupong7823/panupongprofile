import React, { Component } from 'react';
import Social from '../component/Social';
import profileImage from '../component/Image.jpg'

class Home extends Component {
  render() {
    return (
      <div
        className="condiv home"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <div style={{ marginRight: '10px' }}>
          <img
            src={profileImage} 
            alt="profile"
            style={{
              borderRadius: '50%',
              maxWidth: '100%',
              height: 'auto',
              width: '400px',
              maxHeight: '400px',
            }}
          />
          <Social />
        </div>
        <div>
          <p style={{ fontSize: '24px', margin: '120px 20px' }}>Panupong Chuay-upakan</p>
        </div>
      </div>
    );
  }
}

export default Home;

