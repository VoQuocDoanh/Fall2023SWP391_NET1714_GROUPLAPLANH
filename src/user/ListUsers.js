import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/templatemo-pod-talk.css';
function ListUsers() {
  return (
    <div className="App" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(#36c7e0, #fffefe)', backgroundRepeat: 'no-repeat' }}>
      <div className="container-md">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="#"><img src="images/Viewbeat/icons8-spotify-48.png" alt="abc" /></a>
            
            {/* Search Form */}
            <form action="#" method="get" className="custom-form search-form flex-fill me-3" role="search">
              <div className="input-group input-group-lg">
                <input name="search" type="search" className="form-control" id="search" placeholder="Search Podcast" aria-label="Search" />
                <button type="submit" className="form-control" id="submit">
                  <i className="bi-search"></i>
                </button>
              </div>
            </form>

            {/* Navigation Links */}
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
                <a href="http://127.0.0.1:5500/js/login.html" className="btn custom-btn custom-border-btn smoothscroll">Login</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main">
          {/* Audio Components */}
          {/* Replace with your React components */}
          {/* Example: */}
          <div className="audio audio1 dark">
            <img src="images/Viewbeat/img (1).png" alt="abc" />
            <h2>Top 50 - India</h2>
            <p>Your daily update of the most played tracks right now - India.</p>
          </div>

          {/* Repeat similar components for other audio entries */}
        </div>
      </div>

      {/* Bootstrap JavaScript */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </div>
  );
}

export default ListUsers;
