import React from "react"
import { Container, Row, Col, CardHeader, Card, CardText, Button, CardFooter } from "reactstrap"

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "../../../../node_modules/swiper/swiper.scss";

const RoadMap = () => { 
  const slider =[
    {title:'SAP FICO',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP MM',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP SD',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP ABAP',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP HCM',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP Sccessfactor',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP SCM',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP PP',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP FICO HANA',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP MM HANA',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP SD HANA',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
    {title:'SAP ABAP HANA',access :'Free LMS Access',video:'50+ Self Learning Video', training:'Live Project Base Training', duration :'6 Month Internship'},
  ]

  return (
    <React.Fragment>
      <section className="section bg-info" id="roadmap">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Timeline</div>
                <h2>Our Roadmap</h2>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
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
                  className="owl-carousel owl-theme events navs-carousel" id="timeline-carousel">
                 
                  {slider.map((key)=>
                  
                  <SwiperSlide key={key} className="item event-list">
                    <Card>
                      <CardHeader className="mb-3 bg-primary text-white">
                        <h3>
                          <b>{key.title}</b>
                        </h3>

                      </CardHeader>
                        <CardText className="font-size-15">
                          <div>{key.access}</div>
                           <hr  className="my-1"/>
                          <div>{key.video}</div>
                           <hr  className="my-1"/>
                          <div>{key.training}</div>
                           <hr  className="my-1"/>
                          <div>{key.duration}</div>
                           <hr  className="my-1"/>
                           <div>
                               5 stars
                           </div>
                        </CardText>
                        <CardFooter>

                           <div className="mt-3 mb-2">
                               <div>1057+ Learners</div>
                               <Button className=" bg-info" lg primary>
                                Download Content
                                <span className="mx-2 bg-">
                        <i className="bx bx-down-arrow-circle h5 mt-1 text-primary "></i>
                      </span>
                               </Button>
                           </div>
                        </CardFooter>
                      
                    </Card>
                    {/* <div>
                      <div className="event-date">
                      <div className="text-primary mb-1">December, 2019</div>
                      <h5 className="mb-4">ICO Platform Idea</h5>
                      </div>
                      <div className="event-down-icon">
                      <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                      </div>

                      <div className="mt-3 px-3">
                        <p className="text-muted">It will be as simple as occidental in fact it will be Cambridge</p>
                      </div>
                    </div> */}
                  </SwiperSlide>
                      )}


                  


                 
                </Swiper>                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default RoadMap
