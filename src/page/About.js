import React, { Component } from 'react';
import profileImage from '../component/Image.jpg'

class About extends Component {
    render() {
        return (
            <div className="about" style={{ marginLeft: '20px', marginRight: '20px' }}>
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
                <h3>Hello, I'm Panupong Chuay-upakan</h3>
                <p style={{ textIndent: '3em' }}>
                    I am currently studying at Prince of Songkla University in the Faculty 
                    of Science, majoring in Computer Science. I have a strong interest in web application development, specifically in front-end programming. 
                    I am eager to gain new experiences and enhance my skills in this field.
                </p>
                <p style={{ textIndent: '3em' }}>
                    I am seeking an internship opportunity related to front-end programming to further develop my abilities and expand my knowledge. 
                    I believe that hands-on experience is crucial in honing my skills and becoming proficient in creating interactive and user-friendly web applications.
                </p>
            </div>
        );
    }
}

export default About;
