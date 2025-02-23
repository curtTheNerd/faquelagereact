import React from "react";

const TourCard = (props) => {
    return (
        <a href={props.locationLink} key={props.id} className='tourCard' target='_blank' rel="noreferrer noopener">
            <div className="tourCardInfo">
                <div className="tourCardTitle">
                    <h4 className="tourPlace">{props.ort}</h4>
                    <h4 className="tourDate">{props.datum}</h4>
                </div>
                <h5 className="tourLocation">{props.location}</h5>
            </div>
        </a>
    )
}

export default TourCard