import { Col, Row } from 'antd'
import React from 'react'
import"./../App.css";
import BorderOuterOutlined, { UserAddOutlined, UserOutlined } from '@ant-design/icons'

export default function Header() {
  return (
    <div>
      <Row className='' >
        <Col className='w-1/3'><h1 className='ml-3 font-extrabold  ' style={{fontSize: '7vw'}}>Logo</h1></Col>
        <Col className='text-right relative  flex w-2 ' >
          <ul  className='justify-self-end bg-black m-auto'>
            <li></li>
            <li></li>
            <li><UserOutlined className='font-light  text-right text-5xl bg-green-500 w-16' /></li>
            <li><BorderOuterOutlined ><UserOutlined/></BorderOuterOutlined></li>
          </ul>
        </Col>
        </Row>
    </div>
  )
}
