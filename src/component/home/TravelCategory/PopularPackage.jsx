import React from 'react';
import HomeCategoryCard from './HomeCategoryCard';
import PackageLink from '../PackageLink';

function PopularPackage() {
    return (
        <>
            <section className="PopularPackageSection">
                <div className="container">
                    <div className="headingLeft mb-4">
                        <h4 className="top"><span className="d-inline">Pack & Go</span>
                            <div className="line"></div>
                        </h4>
                        <h1 className="mainHeading mb-5">Popular Package</h1>
                    </div>
                    <div className="row mt-3">
                        <HomeCategoryCard travelCategory={PackageLink[0].travelCategory} />
                        <HomeCategoryCard travelCategory={PackageLink[1].travelCategory} />
                        <HomeCategoryCard travelCategory={PackageLink[2].travelCategory} />
                        <HomeCategoryCard travelCategory={PackageLink[3].travelCategory} />
                    </div>
                    <div className="row">
                        <button className="btn btn-danger view_more">View More</button>
                    </div>
                </div>
            </section>
        </>
    );

}

export default PopularPackage;