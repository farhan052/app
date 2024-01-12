
import TableContainer from 'components/Common/TableContainer';
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Col,Modal, Button, Form, Label, Input , Row, Breadcrumb, Container, UncontrolledTooltip} from 'reactstrap'
 import classnames from 'classnames'
function index() {
  const [open, setOpen] = useState(false)


  const action= (row)=><>
  <Row className='d-flex justify-content-center '>
    <div><i className='bx bx-dots-horizontal-rounded'></i></div>


    <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone me-2"></i>
                    {props.t("UI Elements")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                         
                          <Link to="/ui-cards" className="dropdown-item">
                            props.t"Cards"
                          </Link>
                          <Link to="/ui-carousel" className="dropdown-item">
                            props.t"Carousel"
                          </Link>
                          
                        </div>
                      </Col>
                     
                    </Row>
                  </div>
   {/* <Button className='p-1 col-sm-3 ' color='info'><i className='bx font-size-16 bx-pencil'></i></Button>
    <Button className='p-1 col-sm-3 mx-1' color='success'><i className="mdi font-size-16 mdi-eye-outline" /></Button>
    <Button className='p-1 col-sm-3' color='danger'><i className="mdi font-size-16 m-0 mdi-delete-outline" /> </Button> */}
  </Row>
  
  </>


    const columns = useMemo(
        () => [
            {
                Header: 'Position',
                accessor: 'index',
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
           
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Mobile No',
                accessor: 'mobile'
            },
            {
                Header: 'Action',
                accessor: action
            },
            // {
            //   Header: 'Action',
            //   accessor: 'action',
            //   disableFilters: true,
            //   Cell: (cellProps) => {
            //       return (
            //           <ul className="list-unstyled hstack gap-1 mb-0">
            //               <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
            //               <Button 
            //                       className="btn btn-sm btn-soft-primary"
            //                       // id='{viewtooltip-${cellProps.row.original.id}}' //use param Hook  
                                  
            //                   >
            //                       <i className="mdi mdi-eye-outline" />
            //                   </Button>
            //               </li>
            //               <UncontrolledTooltip placement="top"
            //               //  target='{viewtooltip-${cellProps.row.original.id}}'
            //                >
            //                   View
            //               </UncontrolledTooltip>

            //               <li>
            //               <Button               
            //                       className="btn btn-sm btn-soft-primary"
            //                       // id='{edittooltip-${cellProps.row.original.id}}'
            //                   >
            //                       <i className="mdi mdi-pencil-outline" />
            //                       <UncontrolledTooltip placement="top" 
            //                       // target='{edittooltip-${cellProps.row.original.id}}'
            //                        >
            //                           Edit
            //                       </UncontrolledTooltip>
            //                   </Button>
            //               </li>

            //               <li>
            //                   <Link
            //                       to="#"
            //                       className="btn btn-sm btn-soft-danger"
            //                       // onClick={() => {
            //                       //     const jobData = cellProps.row.original;
            //                       //     onClickDelete(jobData);
            //                       // }}
            //                       // id='{deletetooltip-${cellProps.row.original.id}}'
            //                   >
            //                       <i className="mdi mdi-delete-outline" />
            //                       <UncontrolledTooltip placement="top"
            //                       //  target='{deletetooltip-${cellProps.row.original.id}}'
            //                        >
            //                           Delete
            //                       </UncontrolledTooltip>
            //                   </Link>
            //               </li>
            //           </ul>
            //       );
            //   }
            // },
        ],
        []
    );

    const data = [
        {  
          id :1,
          index:1,
          firstName: "Jennifer Chang",
          lastName: "Jennifer Chang",
          email :'shwetank',
            mobile :'88888888888',
            action:'1'
            
        },
        {  
          id :1,
          index:2,
          firstName: "Jennifer Chang",
          lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
        {  
          id :1,
          index:3,
          firstName: "Jennifer Chang",
          lastName: "Jennifer Chang",
          email :'shwetank',
          mobile :'88888888888'
            
        },
        {  
          id :1,
          index:4,
          firstName: "Jennifer Chang",
          lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
          },
          {  
          id :1,
          index:5,
          firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
     
       
    ];



  

    function removeBodyCss() {
      document.body.classList.add("no_padding");
    }


  return (
   <>
    <React.Fragment>
      <div  className="page-content bg-default">
        <Container  fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
   <Card>
    {/* <Row>
        <Col lg={3}>

        <Button onClick={()=>setOpen(!open)} className='btn w-sm btn-success'>
            Add New Participator
        </Button>
        </Col>
    </Row> */}
    <div>
    <Modal
                      isOpen={open}
                      
                      toggle={() => {
                        setOpen(false)
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Participent </h5>
                        <button type="button"
                          onClick={() => {
                            setOpen(false);
                          }} className="btn-close"></button>
                      </div>
                      <Form>
                      <div className="modal-body">
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-firstname-Input"
                        className="col-sm-3 col-form-label"
                      >
                        First name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                          placeholder="Enter Your first name"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-lastname-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Last name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Last Name"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-email-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="email"
                          className="form-control"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email ID"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-lastname-Input"
                        className="col-sm-3 col-form-label"
                      >
                       Mobile No
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Mobile"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-password-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          id="horizontal-password-Input"
                          placeholder="Enter Your Password"
                        />
                      </Col>
                    </Row>

                    <Row className="justify-content-end">
                      <Col sm={9}>
                        <div className="form-check mb-4">
                          <Input
                            type="checkbox"
                            className="form-check-Input"
                            id="horizontal-customCheck"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="horizontal-customCheck"
                          >
                            Remember me
                          </Label>
                        </div>

                        {/* <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                          >
                            Submit
                          </Button>
                        </div> */}
                      </Col>
                    </Row>
                      </div>
                      <div className="modal-footer">
                        <button onClick={()=>setOpen(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">+ ADD</button>
                      </div>
                  </Form>
                    </Modal>
    </div>


     <TableContainer
    columns={columns}
    data={data}
    isGlobalFilter={true}
    // isAddOptions={true}
    // isAddCustList={1}
    isAddUserList={1}
    isJobListGlobalFilter={false}
    handleUserClick={()=>{setOpen(!open)
        removeBodyCss()}
    }
    customPageSize={10}
    customPageSizeOptions={3}
    isPagination={true}
    tableClass="align-middle text-center table-nowrap table-check table"
    theadClass=" alig-middle"
    paginationDiv="col-10 mx-5"
    pagination="justify-content-center  bg-transparent pagination pagination-rounded"
/>
    </Card>
    </Container>
    </div>
    </React.Fragment>
   </>
  )
}

export default index