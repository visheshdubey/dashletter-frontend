import React from 'react';
// import './ImgComp.css';

function ImgCard({src, data}) {
    let imgStyles= {
        width: 88 + '%',
        height: 86 + '%',
        marginLeft: 6 + 'px',
        marginTop: 2 + 'px',
        marginRight: 4 + 'px'
    }
    return (<div style={imgStyles}>
                <img src={src} alt="side-img" style={imgStyles}/>
                <br/>
                <i>{data}</i>
            </div>)
}

export default ImgCard;

