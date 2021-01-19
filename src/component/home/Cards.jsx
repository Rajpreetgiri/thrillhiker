import React from 'react';
import './Cards.css';
import { NavLink } from 'react-router-dom';

function Cards(props) {
    return (<>
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.packageHeading}</h5>
                    <p className="card-text">{props.packageDetails}</p>
                    <button className="btn btn-danger mb-2"> 4.5 <i className="fa fa-star"></i></button>
                    <h4>{props.packagePrice} <span className="fakePrice">{props.fakePrice}</span>
                        <span className="discount text-danger"> 25%</span>
                    </h4>
                    <div className="cardIconSection">
                        <span className="cardIcon">
                            <i className="fa fa-id-card "></i>
                        </span>
                        <span className="cardIcon">
                            <i className="fa fa-blind fs-14"></i>
                        </span>
                        <span className="cardIcon">
                            <i className="fa fa-cutlery fs-14"></i>
                        </span>
                        <span className="cardIcon">
                            <i class="fa fa-car fs-14"></i>
                        </span>
                        <span className="cardIcon">
                            <i class="fa fa-hotel fs-14"></i>
                        </span>
                    </div>

                    <NavLink to="/OpenPackageDetails" className="btn btn-danger mt-3">Buy Package</NavLink>

                </div>
            </div>
        </div>
    </>
    )
}

export default Cards; 