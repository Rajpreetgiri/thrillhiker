import React, { useState } from 'react';
import Header from '../home/Header';
import Footer from '../home/footer/Footer';
import PackageLink from '../home/PackageLink';
import Cards from '../home/Cards';

function Destination() {
    const [data, setData] = useState(null);
    const getData = (val) => {
        setData(val.target.value)
    }

    const Data = data;
    const LocationFrom = () => {
        const backendDestination = (PackageLink.map((val, index) => {
            return (<Cards keys={val.id} imgsrc={val.imgsrc} packagePrice={val.packagePrice} packageHeading={val.packageHeading} packageDetails={val.packageDetails}
                fakePrice={val.fakePrice} from={val.from} />)
        }));

        if (Data == backendDestination) {
            return (
                <Cards keys={backendDestination[0].id} imgsrc={backendDestination[0].imgsrc} packagePrice={backendDestination[0].packagePrice} packageHeading={backendDestination[0].packageHeading} packageDetails={backendDestination[0].packageDetails}
                    fakePrice={backendDestination[0].fakePrice} />
            )
        } else {
            console.log(`error`);
        }
    }



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
            {<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="d-flex m-auto">
                        <input className="form-control me-2 mr-2" id="locationSearch" type="search" placeholder="Search" aria-label="Search" onChange={getData} />
                        <button className="btn btn-outline-success" type="submit" onClick={LocationFrom}>Search</button>
                    </div>
                </div>
            </div>}
            <div className="container mt-5 mb-4">
                <h1 className="mb-5">All Package Are Here for You</h1>
                <div className="row">
                    {LocationFrom}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Destination;