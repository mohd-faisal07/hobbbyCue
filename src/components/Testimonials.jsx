import mediaPlayer from "./../Images/mediaPlayer.png";
// import mediaAuthor from "./../Images/mediaAuthor.png";
import authorImage from "./../Images/authorImage.png";
// import { Col, Row } from "react-bootstrap";
function Testimonial() {
  return (
    <div className="container">
      <div className="row p-md-5 p-sm-0">
        <div className="col-md-12">
          <div
            className="testimonials-section"
            style={{
              padding: "40px",
              borderRadius: "10px",
              backgroundColor: "#F7F5F9",
            }}
          >
            <div className="section-title d-flex align-items-center mb-3 justify-content-md-start justify-content-sm-center">
              <span
                className="testimonialsQuote"
                style={{ backgroundColor: "#8064A2" }}
              >
                <i className="fas fa-quote-left" style={{ color: "white" }} />
              </span>
              <h2 className="mb-0">Testimonials</h2>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text">
                <p
                  className="lh-lg"
                  style={{
                    color: "#999",
                  }}
                >
                  In a fast growing and ever changing city like Bangalore, it
                  sometimes becomes very difficult to find or connect with like
                  minded people. Websites like hobbycue.com is a great service
                  which helps me get in touch with, communicate, connect, and
                  exchange ideas with other dancers. It also provides the extra
                  benefit of finding products and services that I can avail,
                  which I can be assured is going to be of great quality as it
                  comes recommended by people of the hobbycue community. To have
                  discussions, to get visibility, and to be able to safely
                  explore various hobbies and activities in my city, all under
                  one roof, is an excellent idea and I highly recommend it.
                </p>
              </div>
              <div className="row testimonial-author mt-4 justify-content-between">
                {/* Media player */}
                <img
                  src={mediaPlayer}
                  alt="media player"
                  style={{
                    maxHeight: "80px",
                  }}
                  className="col mb-4"
                />
                {/* Media Author */}
                {/* <img
                  src={mediaAuthor}
                  alt="Author"
                  style={{
                    maxHeight: "80px",
                  }}
                  className="col-sm"
                /> */}
                <div className="d-flex align-items-md-center justify-content-md-end col-sm mb-4">
                  <div>
                    <img
                      src={authorImage}
                      alt="Author"
                      style={{
                        maxHeight: "80px",
                        marginRight: "16px",
                      }}
                    />
                  </div>
                  <div>
                    <h5 style={{ color: "#8064A2" }}>Shubha Nagarajan</h5>
                    <p style={{ color: "#0096C8" }}>Classical Dancer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
