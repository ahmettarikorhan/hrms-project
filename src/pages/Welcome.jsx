import React from "react";
import { Carousel } from "react-bootstrap";

export default function Welcome() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tezgahsepeti.com/wp-content/uploads/2018/12/7706-TALIA-GREY_0728_3267x1626-980x480.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>HRMS Projesine Hoşgeldiniz</h3>
            <p>Bu proje Engin Demiroğ katkılarıyla React ve Java kampı için oluşturulmuştur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tezgahsepeti.com/wp-content/uploads/2018/12/7706-TALIA-GREY_0728_3267x1626-980x480.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tezgahsepeti.com/wp-content/uploads/2018/12/7706-TALIA-GREY_0728_3267x1626-980x480.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
