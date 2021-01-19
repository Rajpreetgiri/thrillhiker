import React from 'react';
import Header from '../home/Header';
import PackageLink from '../home/PackageLink';
import Cards from '../home/Cards';
import Footer from '../home/footer/Footer';

function upcomingTrips() {
    return (
        <>
            <Header />
            <div className="container-fluid p-0">
                <img
                    className="d-block w-100"
                    src="/images/101.jpg"
                    alt="First slide"
                />
            </div>
            <div className="container mt-5 mb-4">
                <h1 className="mb-5">All Package Are Here for You</h1>
                <div className="row">
                    {PackageLink.map((val, index) => {
                        return (
                            <Cards keys={val.id} imgsrc={val.imgsrc} packagePrice={val.packagePrice} packageHeading={val.packageHeading} packageDetails={val.packageDetails}
                                fakePrice={val.fakePrice} />
                        )
                    })
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default upcomingTrips;


