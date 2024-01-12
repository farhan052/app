import React from 'react'
import { Col, Container, Row } from 'reactstrap'
// import Swiper from 'swiper'
// import { SwiperSlide } from 'swiper/react'
//Images
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from "../../../assets/images/clients/1.png";
import client2 from "../../../assets/images/clients/2.png";
import client3 from "../../../assets/images/clients/3.png";
import client4 from "../../../assets/images/clients/4.png";
import client5 from "../../../assets/images/clients/5.png";
import client6 from "../../../assets/images/clients/6.png";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../../../../node_modules/swiper/swiper.scss";
//  import classnames form 'classnames'
function index() {
  return (
    <React.Fragment>
      <section className="section pt-4 bg-white" id="about">
        <Container>
        <Row>
            <Col lg={12}>
              <div className="hori-timeline">
                <Swiper
                  slidesPerView={1}
                  // spaceBetween={10}
                  navigation
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    678: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    }
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="owl-carousel owl-theme clients-carousel" id="clients-carousel" dir="ltr">
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <div className='icon-box'>

                      <i className="sprite techmahendra"></i>
                      </div>
                      <img src={client1} alt="client-img" className="mx-auto img-fluid d-block" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <div className='icon-box'>
                      <i className="sprite techmahendra"></i>
                      </div>
                      <img src={client2} alt="client-img" className="mx-auto img-fluid d-block" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <div className='icon-box'>
                      <i className="sprite techmahendra"></i>
                      </div>
                      <img src={client3} alt="client-img" className="mx-auto img-fluid d-block" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <div className='icon-box'>
                      <i className="sprite techmahendra"></i>
                      </div>
                      {/* <img src={client4} alt="client-img" className="mx-auto img-fluid d-block" /> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <i className="sprite techmahendra"></i>
                      {/* <img src={client5} alt="client-img" className="mx-auto img-fluid d-block" /> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="client-images">
                      <i className="sprite techmahendra"></i>
                      {/* <img src={client6} alt="client-img" className="mx-auto img-fluid d-block" /> */}
                    </div>
                  </SwiperSlide>                  
                </Swiper>
              </div>
            </Col>
          </Row>
            </Container>
            </section>
            {/* </React.Fragment> */}

    </React.Fragment>
  )
}

export default index