import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel styles

// Import Owl Carousel options if needed
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.css';

export default function Test2() {
    const options = {
        items: 5, // Number of items to display at a time
        loop: true, // Infinite loop
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this example)
        nav: true, // Display navigation arrows
        dots: true, // Display pagination dots
        responsive: {
            0: {
                items: 1, // Number of items to display on small screens
            },
            768: {
                items: 2, // Number of items to display on medium screens
            },
            992: {
                items: 3, // Number of items to display on large screens
            },
        },
    };

    // Example usage in your OwlCarousel component
    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <img src={require("../images/profile/pexels-photo-164936-684x1024.jpeg")} className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                    <h4 className="mb-2">
                        Drums
                        <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                    </h4>
                    <span className="badge">Storytelling</span>
                    <span className="badge">Business</span>
                </div>
                <div className="social-share">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-twitter" />
                        </li>
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-facebook" />
                        </li>
                    </ul>
                </div>
            </div>
            {/* Repeat the above structure for other carousel items */}
            <div className="item">
                <img src={require("../images/profile/febdba6d-ed85-422b-b437-01b25015360c.jpg")} className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                    <h4 className="mb-2">
                        Drums
                        <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                    </h4>
                    <span className="badge">Storytelling</span>
                    <span className="badge">Business</span>
                </div>
                <div className="social-share">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-twitter" />
                        </li>
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-facebook" />
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <img src={require("../images/profile/hinh-guitar-am-cung.jpg")} className="owl-carousel-image img-fluid" alt="" />
                    <div className="owl-carousel-info">
                        <h4 className="mb-2">
                            Drums
                            <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                        </h4>
                        <span className="badge">Storytelling</span>
                        <span className="badge">Business</span>
                    </div>
                    <div className="social-share">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-twitter" />
                            </li>
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-facebook" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../images/profile/Violin.webp")} className="owl-carousel-image img-fluid" alt="" />
                    <div className="owl-carousel-info">
                        <h4 className="mb-2">
                            Drums
                            <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                        </h4>
                        <span className="badge">Storytelling</span>
                        <span className="badge">Business</span>
                    </div>
                    <div className="social-share">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-twitter" />
                            </li>
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-facebook" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../images/profile/test-8482.jpg")} className="owl-carousel-image img-fluid" alt="" />
                    <div className="owl-carousel-info">
                        <h4 className="mb-2">
                            Drums
                            <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                        </h4>
                        <span className="badge">Storytelling</span>
                        <span className="badge">Business</span>
                    </div>
                    <div className="social-share">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-twitter" />
                            </li>
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-facebook" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../images/profile/Bach-Trompete_06.08.2008_12-46-40_2304x3072.jpg")} className="owl-carousel-image img-fluid" alt="" />
                    <div className="owl-carousel-info">
                        <h4 className="mb-2">
                            Drums
                            <img src={require("../images/verified.png")} className="owl-carousel-verified-image img-fluid" alt="" />
                        </h4>
                        <span className="badge">Storytelling</span>
                        <span className="badge">Business</span>
                    </div>
                    <div className="social-share">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-twitter" />
                            </li>
                            <li className="social-icon-item">
                                <a href="#" className="social-icon-link bi-facebook" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                        <span aria-label="Previous"></span>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <span aria-label="Next"></span>
                    </button>
                </div>
                <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                        <span></span>
                    </button>
                </div>
            </div>
        </OwlCarousel>
    );
}


