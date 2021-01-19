import react from 'react';
import './ContactUs.css';
function ContactUs() {
    return (
        <>
            <section className="sixthSection">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img src="./images/contact-people.png" alt="" className="fromSectionImg" />
                        </div>
                        <div className="col-md-6">
                            <form className="homeContactForm p-3">
                                <h4 className="headingContact text-center">Enquiry Form</h4>
                                <p className="contactFormLine text-center">Just Pack & Go! let leave your travel plan to travel experts.</p>
                                <div className="col-12">
                                    <input autoComplete="off" placeholder="Enter Your Name" type="text" name="uName" id="" className="form-control contactFormInput" />
                                </div>
                                <div className="col-12">
                                    <input autoComplete="off" placeholder="Mobile Number" type="text" name="uMNumber" id="" className="form-control contactFormInput" />
                                </div>
                                <div className="col-12">
                                    <input autoComplete="off" placeholder="Email" type="Email" name="uEmail" id="" className="form-control contactFormInput" />
                                </div>
                                <div className="row m-0">
                                    <div className="col-6">
                                        <input autoComplete="off" placeholder="From" type="text" name="" id="" className="form-control contactFormInput" />
                                    </div>
                                    <div className="col-6">
                                        <input autoComplete="off" placeholder="To" type="text" name="" id="" className="form-control contactFormInput" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea type="text" name="uMessage" id="" className="form-control contactFormInput" placeholder="Message" />
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn mt-4 mb-4 sendEnquirybtn"> Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs;