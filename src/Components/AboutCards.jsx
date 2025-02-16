import React from "react";
import { useState } from "react";
import { AboutData as Data } from "./constants/Data";

const AboutCards = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const openModal = (data) => {
        setSelectedData(data);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleNext = () => {
        const currentIndex = Data.findIndex(data => data.id === selectedData.id);
        const nextIndex = (currentIndex + 1) % Data.length;
        setSelectedData(Data[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = Data.findIndex(data => data.id === selectedData.id);
        const prevIndex = (currentIndex - 1 + Data.length) % Data.length;
        setSelectedData(Data[prevIndex]);
    };

    return (
        <div className="aboutSecContent">
            {
                Data.map(data => {
                    return (
                        <div key={data.id} className='aboutCard' onClick={() => openModal(data)}>
                            <div className="aboutImageDiv">
                                <img src={data.imgSrc} alt={data.name} />
                            </div> 
    
                            <div className="aboutCardInfo">
                                <h4 className="aboutName">{data.name}</h4>
                                <h5 className="aboutInstrument">Instrument: {data.instrument}</h5>
                                <h5 className="aboutSkill">Skill: {data.skill}</h5>
                                <h5 className="aboutLink">Follow on Instagram: </h5>
                                <h5 className="aboutLinkName"><a href={data.instaLink} className="aboutLinkName" rel="noreferrer noopener" target='_blank'>{data.linkName}</a></h5>
                            </div>
                        </div>
                    )
                })
            }
            
            {
                showModal && (
                    <div className="modal">
                        <div className="modalCard">
                            <div className="aboutImageDiv">
                                <img src={selectedData.imgSrc_m} alt={selectedData.name} />
                            </div> 
    
                            <div className="aboutCardInfo">
                                <h4 className="aboutName">{selectedData.name}</h4>
                                <h5 className="aboutInstrument">Instrument: {selectedData.instrument}</h5>
                                <h5 className="aboutSkill">Skill: {selectedData.skill}</h5>
                                <h5 className="modalTextAdd">{selectedData.modalTextAdd}</h5>
                                <h5 className="aboutLink">Follow on Instagram: <a href={selectedData.instaLink} className="aboutLinkName" rel="noreferrer noopener" target='_blank'>{selectedData.linkName}</a></h5>
                            </div>
                        </div>
    
                        <span className="modalClose" onClick={closeModal}>&times;</span>
                        <a className="modalPrev" onClick={handlePrev}>&#10094;</a>
                        <a className="modalNext" onClick={handleNext}>&#10095;</a>
                    </div>
                )
            }
        </div>
    )
}

export default AboutCards