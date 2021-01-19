import './Package.css';
import Cards from './Cards';
import PackageLink from './PackageLink';

function Package() {
    return (
        <>
            <section className="secondSection">
                <div id="multiPackage" className="allPackage">
                    <div className="container">
                        <div className="headingLeft mb-4">
                            <h4 className="top">
                                <span className="d-inline">PACK & GO</span>
                                <div className="line"></div>
                            </h4>
                            <h1 className="mainHeading">Awesome Tour</h1>
                        </div>
                        <div className="row">
                            <Cards keys={PackageLink[0].id} imgsrc={PackageLink[0].imgsrc} packagePrice={PackageLink[0].packagePrice} packageHeading={PackageLink[0].packageHeading} packageDetails={PackageLink[0].packageDetails}
                                fakePrice={PackageLink[1].fakePrice} />

                            <Cards keys={PackageLink[1].id} imgsrc={PackageLink[1].imgsrc} packagePrice={PackageLink[1].packagePrice} packageHeading={PackageLink[1].packageHeading} packageDetails={PackageLink[1].packageDetails}
                                fakePrice={PackageLink[1].fakePrice} />

                            <Cards keys={PackageLink[2].id} imgsrc={PackageLink[2].imgsrc} packagePrice={PackageLink[2].packagePrice} packageHeading={PackageLink[2].packageHeading} packageDetails={PackageLink[2].packageDetails}
                                fakePrice={PackageLink[2].fakePrice} />

                        </div>
                        <div className="row">
                            <button className="btn btn-danger view_more">View More</button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Package;