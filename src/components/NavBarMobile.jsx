import logo from "./../Images/logo.png";
function NavBar() {
  return (
    <div className="container">
      <div
        className="row ps-4 pt-2"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 999,
          alignItems: "center",
        }}
      >
        <div className="col col-md-3 col-sm-6">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              style={{
                maxHeight: "34px",
              }}
            />
          </div>
        </div>
        <div className="col col-md-6 col-sm-6">
          <div className="nav-links">
            <a href="#" className="explore">
              <i
                className="fas fa-magnifying-glass"
                style={{ color: "#8064A2" }}
              ></i>
            </a>
            <a href="#" className="notification">
              <i className="fas fa-bell" style={{ color: "#8064A2" }}></i>
            </a>
            <a href="#">
              <i className="fas fa-bars" style={{ color: "#8064A2" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
