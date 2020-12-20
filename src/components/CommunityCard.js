import '../ComponentsCSS/CommunityCard.css';
import React from 'react';

export default function CommunityCard({name}) {
    return (
        <div className="card-container">
            <div className="card-content">
                <img className="image-icon" src="./images/Mk11.webp" alt=""/>
                <h2 className="community-name"> {name} </h2>
                <button className="visit"> Visit </button>
            </div>
        </div>
    )
}