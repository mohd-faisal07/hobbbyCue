import { Button } from "react-bootstrap";
import logo from "./../Images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
function NavBar() {
  return (
    <div className="container">
      <div
        className="row  py-md-4 px-md-5 "
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 999,
        }}
      >
        <div className="col-md-3 col-sm">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              style={{
                maxHeight: "52px",
              }}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="nav-links">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <i className="fas fa-compass" style={{ color: "#8064A2" }}></i>
                &nbsp; Explore
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">People - Community</Dropdown.Item>
                <Dropdown.Item href="#">People - Venues</Dropdown.Item>
                <Dropdown.Item href="#">Program - Events</Dropdown.Item>
                <Dropdown.Item href="#">Product - Store</Dropdown.Item>
                <Dropdown.Item href="#">Blogs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="#" className="hobbies">
              <i className="fas fa-star" style={{ color: "#8064A2" }}></i>
              Hobbies
            </a>
            <a href="#" className="bookmark">
              <i className="fas fa-bookmark" style={{ color: "#8064A2" }}></i>
            </a>
            <a href="#" className="notification">
              <i className="fas fa-bell" style={{ color: "#8064A2" }}></i>
            </a>
            <a href="#" className="cart">
              <i
                className="fas fa-shopping-cart"
                style={{ color: "#8064A2" }}
              ></i>
            </a>
            <Button variant="outline-primary ms-2">Sign in</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
