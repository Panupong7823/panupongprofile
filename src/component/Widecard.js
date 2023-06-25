import React from 'react';

const Widecard = (props) => {
    const { title, where, from, to, imageSrc, imagePosition } = props;

    return (
        <div className={`widecard ${imagePosition === 'right' ? 'widecard-right' : ''}`}>
            <div className="compdet">
                <h3>{title}</h3>
                <h4 className="secondtext">{where}</h4>
                <h4 className="secondtext">
                    {from} - {to}
                </h4>
            </div>
            <img src={imageSrc} alt="Education" className="widecard-image" />
        </div>
    );
};

export default Widecard;
