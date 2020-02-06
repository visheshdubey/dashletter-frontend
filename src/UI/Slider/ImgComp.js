import React from 'react';
import './ImgComp.css';

function ImgComp({src, data, headtext}) {
    let imgStyles= {
        width: 100 + '%',
        height: 100 + '%'
    }
    return (<div class="textOverImage" style={imgStyles} data-text={data} head={headtext}>
                <img src={src} alt="side-img" style={imgStyles}/>
            </div>)
}

export default ImgComp;

