import '../css/style.css';
import '../css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,  // Disable dots for brand logos
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of brands visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Hide arrows for a clean look
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="text-center mb-5">Our Clients Say!!!</h1>
          <div className="owl-carousel testimonial-carousel">
          <Slider {...settings}>
            <div className="testimonial-item bg-light rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-1.jpg"
                  style={{width: "50px" , height: "50px"}}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-2.jpg"
                  style={{width: "50px" , height: "50px"}}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-3.jpg"
                  style={{width: "50px" , height: "50px"}}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded"
                  src="img/testimonial-4.jpg"
                  style={{width: "50px" , height: "50px"}}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    )
}