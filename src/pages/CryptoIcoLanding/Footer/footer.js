import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import FooterLink from "./footer-link"

const Features = () => {
  const footerLinks = [
    {
      title: "",
      links: [        {title :'SAP MM Online Training'},
      {title :'SAP SD Online Training'},
      {title :'SAP PP Online Training'},
      {title :'SAP PM Online Training'},
      {title :'SAP QM Online Training'},
      {title :'SAP PS Online Training'},
      {title :'SAP BW Online Training'},  
      {title :'SAP BI Online Training'},
      {title :'SAP GRC Online Training'},
      {title :'SAP C4C Online Training'},
      {title :'SAP SCM Online Training'},
      {title :'SAP EWM Online Training'},
      {title :'SAP APO Online Training'},
      {title :'SAP EHS Online Training'},
      {title :'SAP HCM Online Training'},
      {title :'SAP PPDS Online Training'},
      {title :'SAP FICO Online Training'},
      {title :'SAP ABAP Online Training'},
      {title :'SAP BODS Online Training'},
      {title :'SAP FIORI Online Training'},
      {title :'SAP Ariba Online Training'},
      {title :'SAP BASIS Online Training'},
      {title :'SAP BO/BOBJ Online Training'},
      {title :'SAP Security Online Training'},
      {title :'SAP Workflow Online Training'},
      {title :'SAP C4C Cloud Online Training'},
      {title :'SAP NetWeaver Online Training'},
      {title :'SAP PP on Hana Online Training'},
      {title :'SAP PM on Hana Online Training'},
      {title :'SAP Web Dynpro Online Training'},
      {title :'SAP MM on Hana Online Training'},
      {title :'SAP BW on HANA Online Training'},
      {title :'SAP SD on Hana Online Training'},
      {title :'SAP FIORI Cloud Online Training'},
      {title :'SAP BO on Cloud Online Training'},
      {title :'SAP HCM on Hana Online Training'},
      {title :'SAP Business One Online Training'},
      {title :'SAP FICO on Hana Online Training'},
      {title :'SAP ABAP on Hana Online Training'},
      {title :'SAP S/4 HANA EHS Online Training'},
      {title :'SAP BASIS on Hana Online Training'},
      {title :'SAP Successfactor Online Training'},
      {title :'SAP PPDS on S/4 Hana Online Training'},
      {title :'SAP Security on Hana Online Training'},
      {title :'SAP S/4 HANA Workflow Online Training'},
      {title :'SAP BI Analytics Cloud Online Training'},
      {title :'AP S/4 HANA Simple Finance Online Training'},
      {title :'SAP Plant Maintenance (PM) Online Training'},
      {title :'SAP Project Management (PM) Online Training'},
      {title :'SAP S/4 HANA Cloud Warehouse Online Training'},
      
      ],
    },
    {
      title: "",
      links: [
        {title :'SAP MM Online Training'},
        {title :'SAP SD Online Training'},
        {title :'SAP PP Online Training'},
        {title :'SAP PM Online Training'},
        {title :'SAP QM Online Training'},
        {title :'SAP PS Online Training'},
        {title :'SAP BW Online Training'},  
        {title :'SAP BI Online Training'},
        {title :'SAP GRC Online Training'},
        {title :'SAP C4C Online Training'},
        {title :'SAP SCM Online Training'},
        {title :'SAP EWM Online Training'},
        {title :'SAP APO Online Training'},
        {title :'SAP EHS Online Training'},
        {title :'SAP HCM Online Training'},
        {title :'SAP PPDS Online Training'},
        {title :'SAP FICO Online Training'},
        {title :'SAP ABAP Online Training'},
        {title :'SAP BODS Online Training'},
        {title :'SAP FIORI Online Training'},
        {title :'SAP Ariba Online Training'},
        {title :'SAP BASIS Online Training'},
        {title :'SAP BO/BOBJ Online Training'},
        {title :'SAP Security Online Training'},
        {title :'SAP Workflow Online Training'},
        {title :'SAP C4C Cloud Online Training'},
        {title :'SAP NetWeaver Online Training'},
        {title :'SAP PP on Hana Online Training'},
        {title :'SAP PM on Hana Online Training'},
        {title :'SAP Web Dynpro Online Training'},
        {title :'SAP MM on Hana Online Training'},
        {title :'SAP BW on HANA Online Training'},
        {title :'SAP SD on Hana Online Training'},
        {title :'SAP FIORI Cloud Online Training'},
        {title :'SAP BO on Cloud Online Training'},
        {title :'SAP HCM on Hana Online Training'},
        {title :'SAP Business One Online Training'},
        {title :'SAP FICO on Hana Online Training'},
        {title :'SAP ABAP on Hana Online Training'},
        {title :'SAP S/4 HANA EHS Online Training'},
        {title :'SAP BASIS on Hana Online Training'},
        {title :'SAP Successfactor Online Training'},
        {title :'SAP PPDS on S/4 Hana Online Training'},
        {title :'SAP Security on Hana Online Training'},
        {title :'SAP S/4 HANA Workflow Online Training'},
        {title :'SAP BI Analytics Cloud Online Training'},
        {title :'AP S/4 HANA Simple Finance Online Training'},
        {title :'SAP Plant Maintenance (PM) Online Training'},
        {title :'SAP Project Management (PM) Online Training'},
        {title :'SAP S/4 HANA Cloud Warehouse Online Training'},
        
      ],
    },
    {
      title: "",
      links: [
        {title :'SAP MM Online Training'},
        {title :'SAP SD Online Training'},
        {title :'SAP PP Online Training'},
        {title :'SAP PM Online Training'},
        {title :'SAP QM Online Training'},
        {title :'SAP PS Online Training'},
        {title :'SAP BW Online Training'},  
        {title :'SAP BI Online Training'},
        {title :'SAP GRC Online Training'},
        {title :'SAP C4C Online Training'},
        {title :'SAP SCM Online Training'},
        {title :'SAP EWM Online Training'},
        {title :'SAP APO Online Training'},
        {title :'SAP EHS Online Training'},
        {title :'SAP HCM Online Training'},
        {title :'SAP PPDS Online Training'},
        {title :'SAP FICO Online Training'},
        {title :'SAP ABAP Online Training'},
        {title :'SAP BODS Online Training'},
        {title :'SAP FIORI Online Training'},
        {title :'SAP Ariba Online Training'},
        {title :'SAP BASIS Online Training'},
        {title :'SAP BO/BOBJ Online Training'},
        {title :'SAP Security Online Training'},
        {title :'SAP Workflow Online Training'},
        {title :'SAP C4C Cloud Online Training'},
        {title :'SAP NetWeaver Online Training'},
        {title :'SAP PP on Hana Online Training'},
        {title :'SAP PM on Hana Online Training'},
        {title :'SAP Web Dynpro Online Training'},
        {title :'SAP MM on Hana Online Training'},
        {title :'SAP BW on HANA Online Training'},
        {title :'SAP SD on Hana Online Training'},
        {title :'SAP FIORI Cloud Online Training'},
        {title :'SAP BO on Cloud Online Training'},
        {title :'SAP HCM on Hana Online Training'},
        {title :'SAP Business One Online Training'},
        {title :'SAP FICO on Hana Online Training'},
        {title :'SAP ABAP on Hana Online Training'},
        {title :'SAP S/4 HANA EHS Online Training'},
        {title :'SAP BASIS on Hana Online Training'},
        {title :'SAP Successfactor Online Training'},
        {title :'SAP PPDS on S/4 Hana Online Training'},
        {title :'SAP Security on Hana Online Training'},
        {title :'SAP S/4 HANA Workflow Online Training'},
        {title :'SAP BI Analytics Cloud Online Training'},
        {title :'AP S/4 HANA Simple Finance Online Training'},
        {title :'SAP Plant Maintenance (PM) Online Training'},
        {title :'SAP Project Management (PM) Online Training'},
        {title :'SAP S/4 HANA Cloud Warehouse Online Training'},
        

      ],
    },
  ]

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container color="">
          <Row className="text-center text-light mb-5">
            <div>
              <h4>Online Training</h4>
            </div>
          </Row>
          <Row>
            {footerLinks.map((footerLink, key) => (
              <Col lg="3" sm="6" key={key}>
                <div className="mb-4 text-center mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled font-size-11  footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <Link to={Flink.link}>{Flink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}

            <Col lg="3" sm="6">
              <div className="mb-4 mb-lg-0">
              {/* About ZebLearn SAP Online Training */}
                <h5 className="mb-3 footer-list-title"> About ZebLearn SAP Online Training</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      SAP Courses
                    </div>
                    <hr/>
                    {/* <h5 className="post-title">Donec pede justo aliquet nec</h5> */}
                    <ul>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li>
                      {/* <li>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more. We offer both classroom and online training, so you can choose the mode of learning that suits you best.</li> */}
                    </ul>
                    {/* <p className="mb-0">
                      <i className="bx bx-calen
                      dar me-1"/> 04 Mar, 2020
                    </p> */}
                  </Link>
                  {/* <Link to="#" className="post"> */}
                    {/* <div className="badge badge-soft-success font-size-11 mb-3">
                      Cryptocurrency
                    </div>
                    <h5 className="post-title">In turpis, Pellentesque</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1"/> 12 Mar, 2020
                    </p> */}
                  {/* </Link> */}
                </div>
              </div>
            </Col>
          </Row>

          <hr className="footer-border my-5" />

          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Features
