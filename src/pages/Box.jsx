import React from "react";
import baño1 from "../images/baños1.jpeg";
import baño2 from "../images/baños2.jpeg";
import baño3 from "../images/baños3.jpeg";
import baño4 from "../images/baños4.jpeg";
import baño5 from "../images/baños5.jpeg";
import Carousel from "react-bootstrap/Carousel";
import box1 from "../images/box1.jpeg";
import box2 from "../images/box2.jpeg";

function Box() {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img src={baño1} alt="imagen baño" style={{ width: "500px" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={baño2} alt="imagen baño" style={{ width: "500px" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={baño3} alt="imagen baño" style={{ width: "500px" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={baño4} alt="imagen baño" style={{ width: "500px" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={baño5} alt="imagen baño" style={{ width: "500px" }} />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img src={box1} alt="imagen box" style={{ width: "500px" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={box2} alt="imagen box" style={{ width: "500px" }} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Box;
