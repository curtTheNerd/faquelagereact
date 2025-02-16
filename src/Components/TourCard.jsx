import React from "react";

const TourCard = (props) => {
    return (
        <a key={props.id} href={props.link} className='tourCard' rel="noreferrer noopener" target='_blank'>
            <div className="tourCardInfo">
                <div className="tourCardTitle">
                    <h4 className="tourPlace">{props.ort}</h4>
                    <h4 className="tourDate">{props.datum}</h4>
                </div>
                <h5 className="tourLocation" target='_blank'>{props.location}</h5>
                <h5 className="tourText">{props.optionalerText}</h5>
                <h5><a className="tourLocation" rel="noreferrer noopener" target='_blank'>{props.optionalerLinkName}</a></h5>
            </div>
        </a>
    )
}

export default TourCard