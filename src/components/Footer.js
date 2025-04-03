import '../css/style.css';
import '../css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom";



export default function Footer() {

    return (
        <div
            className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 text-start">Company</h5>
                        <Link className="btn btn-link text-white-50" to="/about">About Us</Link >
                        <Link className="btn btn-link text-white-50" to="/contact">Contact Us</Link >
                        <Link className="btn btn-link text-white-50" to="/category">Our Services</Link >
                        <Link className="btn btn-link text-white-50" to="/privacy">Privacy Policy</Link >
                        <Link className="btn btn-link text-white-50" to="/terms">Terms & Condition</Link >
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 text-start">Quick Links</h5>
                        <Link className="btn btn-link text-white-50" to="/about">About Us</Link >
                        <Link className="btn btn-link text-white-50" to="/contact">Contact Us</Link >
                        <Link className="btn btn-link text-white-50" to="/category">Our Services</Link >
                        <Link className="btn btn-link text-white-50" to="/privacy">Privacy Policy</Link >
                        <Link className="btn btn-link text-white-50" to="/terms">Terms & Condition</Link >
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 text-start">Contact</h5>
                        <p className="mb-2 text-start">
                            <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                            USA
                        </p>
                        <p className="mb-2 text-start">
                            <i className="fa fa-phone-alt me-3"></i>+012 345 67890
                        </p>
                        <p className="mb-2 text-start">
                            <i className="fa fa-envelope me-3"></i>info@example.com
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social" to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social" to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social" to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 text-start">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy;<Link className="border-bottom" to="#">Your Site Name</Link >, All
                            Right Reserved. Designed By
                            <Link className="border-bottom" to="/"> Dev</Link >
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link >
                                <Link to="/faqs">Help & FAQS</Link >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}