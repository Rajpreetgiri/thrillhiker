import React from 'react';
import './HomeCategoryCard.css';

function HomeCategoryCard(props) {
    return (
        <>
            <div className="col-sm-12 col-md-6 mb-4">
                <div className="HomeCategoryCard">
                    <img src="/images/7.jpg" alt="soloTraveling" className="categoryImg w-100" />
                    <div className="overlay CategoryImg">
                        <div className="captionCategory text-white"> {props.travelCategory} </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default HomeCategoryCard;