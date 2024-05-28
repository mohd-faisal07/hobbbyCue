import { Button, Col, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { HobbyCard } from "./components/HobbyCard";
import AddYourOwn from "./components/AddYourOwn";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import "./App.css";
import "./../global.scss";
import MainScreen from "./components/MainScreen";
import footerIllustration from "./Images/footerIllustration.png";

function App() {
  return (
    <>
      <Container>
        <Row className="d-none d-md-none d-lg-block">
          <NavBar />
        </Row>
        <Row className="d-lg-none d-md-block">
          <NavBarMobile />
        </Row>
        <Row>
          <MainScreen />
        </Row>
        <div className="my-5">
          <Row>
            <HobbyCard
              icon="fas fa-users"
              title="People"
              description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
              buttonText="Connect"
              color="#8064A2"
            />

            <HobbyCard
              icon="fas fa-map-marker-alt"
              title="Place"
              description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobby."
              buttonText="Meet up"
              color="#77933C"
            />
          </Row>
          <Row>
            <HobbyCard
              icon="fas fa-shopping-bag"
              title="Product"
              description="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
              buttonText="Get it"
              color="#C0504D"
            />
            <HobbyCard
              icon="fas fa-calendar-check"
              title="Program"
              description="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
              buttonText="Attend"
              color="#0096C8"
            />
          </Row>
        </div>

        <Row>
          <AddYourOwn />
        </Row>
        <Row>
          <Testimonial />
        </Row>
      </Container>
      <Container>
        <Row className="mb-4">
          <Col>
            <h3 className="mb-4">
              Your <span style={{ color: "#8064A2" }}>Hobby</span>, Your
              <span style={{ color: "#0096C8" }}> Community</span>
            </h3>
            <Button>Get Started</Button>
          </Col>
        </Row>

        <Row>
          <img src={footerIllustration} alt="Footer Illustration" />
        </Row>
      </Container>
      <Row>
        <Footer />
      </Row>
    </>
  );
}

export default App;
