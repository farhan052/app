import React from "react"
import { Container, Row, Col, Badge, Card, CardHeader, Button } from "reactstrap"
import { Link } from "react-router-dom"
import { blogs } from "../../../common/data";

const Blog = () => {

  return (
    <React.Fragment>
      <section className="section bg-white" id="features">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                {/* <div className="small-title">key features</div> */}
                <h4>key features</h4>
              </div>
            </Col>
          </Row>
            
          <Row className="d-flex wrap">
            <Col>
            <Row>

            {blogs.map((blog, key) => (
              <Col xl="4" sm="6" key={key}>
                <Card className="bg-white border border-white p-1">
                 
                <div className="blog-box mb-4 mb-xl-0">
                  {/* <div className="position-relative">
                    <img
                    src={blog.imgUrl}
                    alt=""
                    className="rounded img-fluid mx-auto d-block"
                    />
                    <Badge color="success" className="blog-badge font-size-11">
                    {blog.tag}
                    </Badge>
                  </div> */}

                  <div className="mt-4 text-center text-muted">
                    {/* <p className="mb-2">
                      <i className="bx bx-calendar me-1 ms-1" /> {blog.date}
                    </p> */}
                    <h5 className="mb-4">{blog.title}</h5>
                    <p>{blog.desc}</p>

                    <div className="mt-3 mb-3">
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                </div>
                  </Card>
              </Col>
            ))}
            </Row>
            </Col>
            <Col lg={3}>
              <Card className="bg-info px-1">
                <CardHeader className="bg-primary text-light">
                  <h5>

                Most Trending & Job Oriented SAP Modules
                  </h5>
                </CardHeader>
                <div className="blog-box text-light text-center mt-3 mb-4 mb-xl-0">
                 <ul className="">
                  <li className="">SAP Finance (FI): SAP Financial Accounting helps to boost finance management in organizations</li>
                  <li>SAP Material Management (MM)</li>
                  <li>SAP Material Management (MM)</li>
                  <li>SAP Material Management (MM)</li>
                  <li>SAP Material Management (MM)</li>
                  <li>SAP Material Management (MM)</li>
                  <li>SAP Material Management (MM)</li>
                  <li>Advanced Business Application Programming(ABAP)</li>
                 </ul>
              <div className="mt-4 ">
                    <p>Get guidance to choose best suited modules for your profile
For free consultation,
Call @</p>
                    <p className="mb-2">
                      {/* <i className="bx bx-calendar me-1 ms-1" /> dgdggdg */}
                    </p>
                    <h5 className="mb-3">+91-8506 888 288</h5>

                    <div className="mb-3">
                      <Link to="#">
                        <Button>
                          Enquire Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                  
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Blog
