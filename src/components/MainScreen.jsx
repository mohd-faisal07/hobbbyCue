import { useState } from "react";
import illustration from "./../Images/illustration.png";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function MainScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit login form with email and password
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const aciveClass = {
    borderBottom: "3px solid #8064A2",
  };

  const handleSignInClick = (value) => {
    if (signIn !== value) {
      setSignIn(value);
    }
  };

  return (
    <>
      <Col md={7} className="h-50 d-inline-block py-5 px-5 pb-0">
        <h2 style={{ fontStyle: "italic" }}>
          Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
          <span style={{ color: "#8064A2" }}>passion</span>
        </h2>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
        </p>
        <p>
          Your hobby may be about visual or performing arts, sports, games,
          gardening, model making, cooking, indoor or outdoor activities...
        </p>
        <p>
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </Col>
      <Col md={1}></Col>
      <Col md={4} className="py-5 px-5">
        <ul className="nav nav-tabs">
          <li
            className="nav-item"
            onClick={handleSignInClick.bind(null, true)}
            style={signIn ? aciveClass : {}}
          >
            <a
              className={`nav-link`}
              style={{ color: signIn ? "#8064A2" : "#000" }}
            >
              Sign in
            </a>
          </li>
          <li
            className="nav-item"
            onClick={handleSignInClick.bind(null, false)}
            style={!signIn ? aciveClass : {}}
          >
            <a
              className={`nav-link`}
              style={{ color: !signIn ? "#8064A2" : "#000" }}
            >
              Join in
            </a>
          </li>
        </ul>
        <div className="d-flex"></div>
        <Form onSubmit={handleSubmit} className="mt-3">
          <Button variant="outline-primary" className="mb-3 w-100">
            <div className="d-flex align-items-center">
              <i className="fab fa-google"></i>
              <span className="flex-grow-1">
                <strong>Continue with Google</strong>
              </span>
            </div>
          </Button>
          <Button variant="outline-primary" className="mb-3 w-100">
            <div className="d-flex align-items-center">
              <i className="fab fa-facebook-f"></i>
              <span className="flex-grow-1">
                <strong>Continue with Facebook</strong>
              </span>
            </div>
          </Button>
          <p className="text-center">Or Sign In with</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={handleEmailChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={handlePasswordChange}
            />
            <InputGroup>
              {/* <InputGroup.Text>
                <i className="fas fa-eye-slash"></i>
              </InputGroup.Text> */}
            </InputGroup>
          </InputGroup>
          {signIn && (
            <Form.Group controlId="formBasicCheckbox">
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                </Col>
                <Col>
                  <p className="text-end">
                    <a href="#">Forgot password?</a>
                  </p>
                </Col>
              </Row>
            </Form.Group>
          )}
          <Button
            variant={`${signIn ? "outline-dark" : "primary"}`}
            className="w-100"
            type="submit"
            block
          >
            {signIn ? "Continue" : "Agree and continue"}
          </Button>
        </Form>
      </Col>
      <img
        src={illustration}
        alt="illustration"
        style={{ maxHeight: "216px" }}
        className="w-100 d-sm-none"
      />
      <img
        src={illustration}
        alt="illustration"
        style={{ maxHeight: "216px", width: "50%" }}
        className="d-none d-sm-flex"
      />
    </>
  );
}

export default MainScreen;
