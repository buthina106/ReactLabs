import React from 'react';
import "./footer.css";

export function Footer() {
    return (
        <div className="footer-clean">
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Explore</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Jewelry</a></li> 
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Categories</h3>
                            <ul>
                            <li><a href="/">Earrings</a></li>
                            <li><a href="/">Bracelets</a></li>
                            <li><a href="/">Necklaces</a></li>
                            <li><a href="/">Rings</a></li>

                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Connect</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social">
                            <p className="copyright">Bookstore Name © {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
