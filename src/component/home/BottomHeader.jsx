import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function BottomHeader() {
    return (
        <>
            <div className="bottom_header">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="mb-5">LOGO</h1>
                            <h1>Explore</h1>
                            <p>THE WORLD YOU HAVE NEVER SEEN</p>
                            <button className="banner_btn"> <i className="fa fa-arrow-right btn_arrow"></i> Go Explore Now</button>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="mb-5">LOGO</h1>
                            <h1>Explore</h1>
                            <p>THE WORLD YOU HAVE NEVER SEEN</p>
                            <button className="banner_btn"> <i className="fa fa-arrow-right btn_arrow"></i> Go Explore Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className="mb-5">LOGO</h1>
                            <h1>Explore</h1>
                            <p>THE WORLD YOU HAVE NEVER SEEN</p>
                            <button className="banner_btn"> <i className="fa fa-arrow-right btn_arrow"></i> Go Explore Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default BottomHeader;