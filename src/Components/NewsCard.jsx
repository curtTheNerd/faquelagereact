import React from 'react';

const NewsCard = (props) => {
    return (
        <a href={props.link} key={props.id} rel="noreferrer noopener" target="_blank">
            <div className='newsCard'>
                <div className="newsImageDiv">
                    <img src={props.imgSrc} alt={props.title} />
                </div> 

                <div className="newsCardInfo">
                    <h4 className="newsCardTitle">{props.title}</h4>
                    <h5 className="newsCardSubtitle">{props.subtitle}</h5>
                    <h5 className="newsText">{props.text}</h5>
                    <h5 className="newsLink"><div className="newsLinkName">{props.linkName}</div></h5>
                </div>
            </div>
        </a>
    )
}

export default NewsCard