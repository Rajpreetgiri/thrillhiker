import React from 'react';
import './TopDestination.css'
import DestinationLinks from './DestinationLinks';
import DestinationCard from './DestinationCard';

function TopDestination() {
    return (<>
        <section className="thirdSection">
            <div className="container">
                <div className="headingLeft mb-4">
                    <h4 className="top"><span className="d-inline">ENJOY YOUR TRIPS</span>
                        <div className="line"></div>
                    </h4>
                    <h1 className="mainHeading">TOP DESTINATION</h1>
                </div>
                <div className="row">
                    {DestinationLinks.map((val, index) => {
                        return (
                            <DestinationCard keys={val.id} imgsrc={val.imgsrc} destinationHeading={val.destinationHeading} destinationDetails={val.destinationDetails} />
                        );
                    }
                    )}

                </div>
                <div className="row">
                    <button className="btn btn-danger view_more">View More</button>
                </div>
            </div>
        </section>

    </>
    );
}

export default TopDestination;