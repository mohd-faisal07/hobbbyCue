function Footer() {
  return (
    <footer className="footer mt-5 pt-5 bg-light">
      <div className="container pb-0">
        <div className="row">
          <div className="col-md-3">
            <h5>
              <strong>Hobbycue</strong>
            </h5>
            <ul className="list-unstyled footerList">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Work with Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>
              <strong>How Do I</strong>
            </h5>
            <ul className="list-unstyled footerList">
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Add a Listing</a>
              </li>
              <li>
                <a href="#">Claim Listing</a>
              </li>
              <li>
                <a href="#">Post a Query</a>
              </li>
              <li>
                <a href="#">Add a Blog Post</a>
              </li>
              <li>
                <a href="#">Other Queries</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footerList">
            <h5>
              <strong>Quick Links</strong>
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Listings</a>
              </li>
              <li>
                <a href="#">Blog Posts</a>
              </li>
              <li>
                <a href="#">Shop / Store</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-inline">
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-facebook-f"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-twitter"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-instagram"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-pinterest-p"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-google-plus-g"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fab fa-youtube"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fas fa-paper-plane"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item  footerSocialLinkItem">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fas fa-envelope"
                    style={{ color: "#6D747A" }}
                  ></i>
                </a>
              </li>
            </ul>
            <h5 className="mt-4">Invite Friends</h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email ID"
              />
              <button className="btn btn-primary" type="button">
                Invite
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4 py-5" style={{ backgroundColor: "#F7F5F9" }}>
          <div className="col-12 text-center">
            <p>&copy; Purple Cues Private Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
