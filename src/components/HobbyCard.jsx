import { useState } from "react";
import { Col } from "react-bootstrap";

export function HobbyCard({ icon, title, description, buttonText, color }) {
  const [hover, setHover] = useState(false);
  function toggleHover(hoverValue) {
    setHover(hoverValue);
  }

  return (
    <Col className="mb-4" md={6}>
      <div
        className="card h-100 shadow-sm"
        style={
          hover
            ? { backgroundColor: color, border: `2px solid ${color}` }
            : { border: `2px solid ${color}` }
        }
        onMouseEnter={toggleHover.bind(null, true)}
        onMouseLeave={toggleHover.bind(null, false)}
      >
        <div className="card-body p-4" style={hover ? { color: "white" } : {}}>
          <div className="d-flex align-items-center mb-3">
            <i
              className={icon}
              style={{ fontSize: "2rem", color: !hover && color }}
            ></i>
            <h5 className="ms-3 mb-0">{title}</h5>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Col>
  );
}
