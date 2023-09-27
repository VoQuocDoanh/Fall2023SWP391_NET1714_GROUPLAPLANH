import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/templatemo-pod-talk.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
function Homepage() {
  const options = {
    items: 1, // Number of items to display at a time
    loop: true, // Infinite loop
    autoplay: true, // Autoplay the carousel
    autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this example)
    nav: true, // Display navigation arrows
    dots: true, // Display pagination dots
  };
  return (
    <div>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand me-lg-5 me-0" href="index.html">
              <img width="500px" src={require("../images/web-197139275.webp")} className="logo-image img-fluid" alt="templatemo pod talk" />
            </a>
            <form action="#" method="get" className="custom-form search-form flex-fill me-3" role="search">
              <div className="input-group input-group-lg">
                <input name="search" type="search" className="form-control" id="search" placeholder="Search..." aria-label="Search" />
                <button type="submit" className="form-control" id="submit">
                  <i className="bi-search" />
                </button>
              </div>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">User</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><a className="dropdown-item" href="listing-page.html">Create Beat</a></li>
                    <li><a className="dropdown-item" href="detail-page.html">View Beat</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="ms-4">
                <a href="Login" className="btn custom-btn custom-border-btn smoothscroll">Login</a>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="text-center mb-5 pb-2">
                  <h1 className="text-white">PRATICE YOUR CHORDS</h1>
                  <p className="text-white">Take your chord practice to the next level with our structured chord exercises.</p>
                  <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Start listening</a>
                </div>
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
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-podcast-section section-padding pb-0" id="section_2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                  <h4 className="section-title">Trending</h4>
                </div>
              </div>
              <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block d-flex">
                  <div className>
                    <div className="custom-block-icon-wrap">
                      <div className="section-overlay" />
                      <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="https://s3-alpha-sig.figma.com/img/5c9b/a940/3b242457fe12dad0846ebea3aa67c585?Expires=1696204800&Signature=nC1X5RW8dp6zbEWObEVXlfA95T3nuFgEYWGQakLw7SuyQOhO4xZqS0qlXqy-al~7H5BeBYy58ZTKUZcO1~bOVHDhiQnM5oH84FgQfMT9hiV9A5ZH27keo4wBmYmHOrHfgGj3GqDIK9JuD8-tD2268HaSMaV0zZdTO0yBUjrTUzIIXhU6Qe958-ulQvA8JClsqWJo0k71Q4UdNFxDwtHqCQKbm0wBulvmY7Zv2q6-QJU6DwJD4zjMKFmtnyOLBxwv-e7pPvU2RkgtgBrT9noyTn9QiTbnV8wkiSyF1cLtN0HFLa9XAjaj-x2OfoD-7G0h5Z4TJKQ0Ar9kIa3XUBSc0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="custom-block-image img-fluid" alt="" />
                      </a><a href="#" className="custom-block-icon">
                        <i className="bi-play-fill" />
                      </a>
                    </div>
                    <div className="mt-2">
                      <a href="#" className="btn custom-btn">
                        Subscribe
                      </a>
                    </div>
                  </div>
                  <div className="custom-block-info">
                    <div className="custom-block-top d-flex mb-1">
                      <small className="me-4">
                        <i className="bi-clock-fill custom-icon" />
                        50 Minutes
                      </small>
                      <small>Episode <span className="badge">15</span></small>
                    </div>
                    <h5 className="mb-2">
                      <a href="detail-page.html">
                        CHORDS
                      </a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img src={require("../images/profile/Violin.webp")} className="profile-block-image img-fluid" alt="" />
                      <p>
                        Violin
                        <img src={require("../images/verified.png")} className="verified-image img-fluid" alt="" />
                        <strong>Top 1</strong></p>
                    </div>
                    <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" className="bi-headphones me-1">
                        <span>120k</span>
                      </a>
                      <a href="#" className="bi-heart me-1">
                        <span>42.5k</span>
                      </a>
                      <a href="#" className="bi-chat me-1">
                        <span>11k</span>
                      </a>
                      <a href="#" className="bi-download">
                        <span>50k</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi-heart" />
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi-bookmark" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="custom-block d-flex">
                  <div className>
                    <div className="custom-block-icon-wrap">
                      <div className="section-overlay" />
                      <a href="detail-page.html" className="custom-block-image-wrap">
                        <img src="https://s3-alpha-sig.figma.com/img/717f/19b9/5cfb0f9c8fd6afe41ea656c5e84be97c?Expires=1696204800&Signature=GRIbFpjbkwGezoVo5Pv8f75yefFNMpC1awdQimtPZ2Eqn0FVFSsxlIv48Csq422ktDj7SYFMY2MoV~hEB8c9J7riN5kiwcInAjN58hUWFOeVAQOkUMaLs-tJbRiKIXm8XnB9PjA1dc03hVeYxmKxU-WBwIpZ5qMqhxE8xQNZIs~fcFtg405-lEY8O8K~m2XVs8TTxjEwQyViSluTa6LzAdDtAFAWvYaZza0CBiBaT0lYxA4MEQ9GO5GV-M~QkPFir9uh3LkZbyn3RwtMqUv5m9Aj8qH7F5TUQM1FIWgxvRty0qkX~8-1Px9Nf51Rps5FE-V9Qo7Sq~tyqlR3PRyI9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="custom-block-image img-fluid" alt="" />
                      </a><a href="#" className="custom-block-icon">
                        <i className="bi-play-fill" />
                      </a>
                    </div>
                    <div className="mt-2">
                      <a href="#" className="btn custom-btn">
                        Subscribe
                      </a>
                    </div>
                  </div>
                  <div className="custom-block-info">
                    <div className="custom-block-top d-flex mb-1">
                      <small className="me-4">
                        <i className="bi-clock-fill custom-icon" />
                        15 Minutes
                      </small>
                      <small>Episode <span className="badge">45</span></small>
                    </div>
                    <h5 className="mb-2">
                      <a href="detail-page.html">
                        CHORDS
                      </a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img src={require("../images/profile/pexels-photo-164936-684x1024.jpeg")} className="profile-block-image img-fluid" alt="" />
                      <p>Saxophone
                        <img src={require("../images/verified.png")} className="verified-image img-fluid" alt="" />
                        <strong>Top 2</strong></p>
                    </div>
                    <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" className="bi-headphones me-1">
                        <span>140k</span>
                      </a>
                      <a href="#" className="bi-heart me-1">
                        <span>22.4k</span>
                      </a>
                      <a href="#" className="bi-chat me-1">
                        <span>16k</span>
                      </a>
                      <a href="#" className="bi-download">
                        <span>62k</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi-heart" />
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi-bookmark" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="topics-section section-padding pb-0" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                  <h4 className="section-title">Chords</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src="https://s3-alpha-sig.figma.com/img/a86a/1bd4/7e3094389d3d4ba8fed570a1e0bcdc19?Expires=1696204800&Signature=AulEBwK53Xb51oOmUimv0YMZxvgBWufiW4HAg~iT~sb6IwEjymWQOnMwA3TiehQCvRUGgv5C2VSCbZUTJKcwM~y0mlB2un2BGLdzbvOoHO6droD0LbvcEnn8ga9BG9wTXjTWjCesWyNC2xNYQheWsHWhCq8xI3cvYui8AwFm4bRu0bDWbVnxoCutXj7oCB1~aHv~R7Zl9XaVweUG77oKBhCv5KOVikSDSMmuGuiseJIp6PtrC58YeRPUcrKacYgRMT83Vl3ecrpdns0tRKamN~~4Fwq2oVPpBu~AAwackxaxVn5jJc8nwUXRj1LxUuqQpDrDBbJxRroxDnV~nQ28qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="custom-block-image img-fluid" alt="" />
                  </a>
                  <div className="custom-block-info custom-block-overlay-info">
                    <h5 className="mb-1">
                      <a href="listing-page.html">
                        Guitar
                      </a>
                    </h5>
                    <p className="badge mb-0">50 Episodes</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src={require("../images/profile/Violin.webp")} className="custom-block-image img-fluid" alt="" />
                  </a>
                  <div className="custom-block-info custom-block-overlay-info">
                    <h5 className="mb-1">
                      <a href="listing-page.html">
                        Violin
                      </a>
                    </h5>
                    <p className="badge mb-0">12 Episodes</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src={require("../images/profile/drum_booth.jpg")} className="custom-block-image img-fluid" alt="" />
                  </a>
                  <div className="custom-block-info custom-block-overlay-info">
                    <h5 className="mb-1">
                      <a href="listing-page.html">
                        Drums
                      </a>
                    </h5>
                    <p className="badge mb-0">35 Episodes</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-overlay">
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src={require("../images/profile/test-8482.jpg")} className="custom-block-image img-fluid" alt="" />
                  </a>
                  <div className="custom-block-info custom-block-overlay-info">
                    <h5 className="mb-1">
                      <a href="listing-page.html">
                        Piano
                      </a>
                    </h5>
                    <p className="badge mb-0">12 Episodes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trending-podcast-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                  <h4 className="section-title">Chord of Song</h4>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-full">
                  <div className="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img src={require("../images/profile/Rectangle 33.png")} className="custom-block-image img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="custom-block-info">
                    <h5 className="mb-2">
                      <a href="detail-page.html">
                        Piano sound
                      </a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img src={require("../images/profile/1-69.jpg")} className="profile-block-image img-fluid" alt="" />
                      <p>...
                        <strong>Influencer</strong></p>
                    </div>
                    <p className="mb-0">The charm of the piano sound
                      is hard to resist</p>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" className="bi-headphones me-1">
                        <span>100k</span>
                      </a>
                      <a href="#" className="bi-heart me-1">
                        <span>2.5k</span>
                      </a>
                      <a href="#" className="bi-chat me-1">
                        <span>924k</span>
                      </a>
                    </div>
                  </div>
                  <div className="social-share d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi-heart" />
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi-bookmark" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block custom-block-full">
                  <div className="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img src={require("../images/profile/Rectangle 35.png")} className="custom-block-image img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="custom-block-info">
                    <h5 className="mb-2">
                      <a href="detail-page.html">
                        Drums sound
                      </a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img src={require("../images/profile/hoc-trong-giup-giai-toa-cang-thang.jpeg")} className="profile-block-image img-fluid" alt="" />
                      <p>
                        ....
                        <img src={require("../images/verified.png")} className="verified-image img-fluid" alt="" />
                        <strong>Creator</strong>
                      </p>
                    </div>
                    <p className="mb-0">The drum sound is a rhythmic
                      and percussive resonance</p>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" className="bi-headphones me-1">
                        <span>100k</span>
                      </a>
                      <a href="#" className="bi-heart me-1">
                        <span>2.5k</span>
                      </a>
                      <a href="#" className="bi-chat me-1">
                        <span>924k</span>
                      </a>
                    </div>
                  </div>
                  <div className="social-share d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi-heart" />
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi-bookmark" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="custom-block custom-block-full">
                  <div className="custom-block-image-wrap">
                    <a href="detail-page.html">
                      <img src={require("../images/profile/Rectangle 36.png")} className="custom-block-image img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="custom-block-info">
                    <h5 className="mb-2">
                      <a href="detail-page.html">
                        Daily Talk
                      </a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img src={require("../images/profile/ly-do-cac-chang-trai-nen-biet-choi-dan-guitar-1.jpeg")} className="profile-block-image img-fluid" alt="" />
                      <p>
                        ...
                        <img src={require("../images/verified.png")} className="verified-image img-fluid" alt="" />
                        <strong>Vlogger</strong></p>
                    </div>
                    <p className="mb-0">The guitar sound is characterized by its versatile and melodic tones</p>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <a href="#" className="bi-headphones me-1">
                        <span>100k</span>
                      </a>
                      <a href="#" className="bi-heart me-1">
                        <span>2.5k</span>
                      </a>
                      <a href="#" className="bi-chat me-1">
                        <span>924k</span>
                      </a>
                    </div>
                  </div>
                  <div className="social-share d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi-heart" />
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi-bookmark" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div className="subscribe-form-wrap">
                <h6>Subscribe. Every weekly.</h6>
                <form className="custom-form subscribe-form" action="#" method="get" role="form">
                  <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email Address" required />
                  <div className="col-lg-12 col-12">
                    <button type="submit" className="form-control" id="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-md-0 mb-lg-0">
              <h6 className="site-footer-title mb-3">Contact</h6>
              <p className="mb-2"><strong className="d-inline me-2">Phone:</strong> 010-020-0340</p>
              <p>
                <strong className="d-inline me-2">Email:</strong>
                <a href="#">inquiry@pod.co</a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <h6 className="site-footer-title mb-3">Download Mobile</h6>
              <div className="site-footer-thumb mb-4 pb-2">
                <div className="d-flex flex-wrap">
                  <a href="#">
                    <img src={require("../images/app-store.png")} className="me-3 mb-2 mb-lg-0 img-fluid" alt="" />
                  </a>
                  <a href="#">
                    <img src={require("../images/play-store.png")} className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <h6 className="site-footer-title mb-3">Social</h6>
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3 col-12">
              <a className="navbar-brand" href="index.html">
                <img src={require("../images/pod-talk-logo.png")} className="logo-image img-fluid" alt="templatemo pod talk" />
              </a>
            </div>
            <div className="col-lg-7 col-md-9 col-12">
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Homepage</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Browse episodes</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Help Center</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12">
              <p className="copyright-text mb-0">Copyright © 2036 Talk Pod Company
                <br /><br />
                Design: <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a></p>
            </div>
          </div>
        </div>
      </footer>
      {/* JAVASCRIPT FILES */}
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/custom.js"></script>
      <script></script>
    </div>
  );
}


export default Homepage;