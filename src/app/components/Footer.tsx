export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        {/* Row with 3 equal columns */}
        <div className="row text-center text-md-start">
          {/* Social Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>
              Follow <strong>The Courier</strong>
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a className="text-white text-decoration-none" href="#">
                  <i className="bi bi-facebook me-2"></i>Facebook
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  <i className="bi bi-twitter me-2"></i>Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links Section */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>More Info</h5>
            <ul className="list-unstyled mt-3">
              <li><a className="text-white-50 text-decoration-none" href="#">About Us</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Contact Us</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Follow The Courier</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Partner Links Section */}
          <div className="col-12 col-md-4">
            <h5>DC Thomson</h5>
            <ul className="list-unstyled mt-3">
              <li><a className="text-white-50 text-decoration-none" href="#">The Press and Journal</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">The Sunday Post</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Energy Voice</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Bunkered</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-1">© DC Thomson Co Ltd 2025</p>
          <small className="text-white-50">All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
