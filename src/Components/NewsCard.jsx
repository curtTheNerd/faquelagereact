import React from 'react';

const NewsCard = ({id, imgSrc, title, subtitle, text, link, linkName}) => {
    return (
        <a href={link} key={id} target="_blank">
            <div className='newsCard'>
                <div className="imageDiv">
                    <img src={imgSrc} alt={title} />
                </div> 

                <div className="newsCardInfo">
                    <h4 className="title">{title}</h4>
                    <h5 className="subtitle">{subtitle}</h5>
                    <h5 className="text">{text}</h5>
                    <h5 className="link"><div className="linkName">{linkName}</div></h5>
                </div>
            </div>
        </a>
    )
}

export default NewsCard