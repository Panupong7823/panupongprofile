import React, { Component } from 'react';
import Widecard from '../component/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <Widecard
                    title="Prince of Songkla University"
                    where="GPA : 3.24"
                    from="2020"
                    to="Present"
                    imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Prince_of_Songkla_University_Emblem.png/358px-Prince_of_Songkla_University_Emblem.png"
                    imagePosition="right"
                />
                <Widecard
                    title="Dechapattanayanukul School."
                    where="GPA : 3.31"
                    from="2017"
                    to="2019"
                    imageSrc="https://decha.ac.th/images/mayor/logo.png"
                    imagePosition = "right"
                />
            </div>
        );
    }
}

export default Education;
