import { Button, Card, Checkbox, Form, Input, Space } from 'antd'
import React, { useState } from 'react'
import { Link, Route, useNavigate, useNavigation } from 'react-router-dom'
import './../App.css';
import Home from './Home';
import axios from "axios";





export default function Register() {
  const [reffral, setreffral] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        axios.post('http://localhost:5000', values,{
          headers: {'Content-Type': undefined,
        }
           /** Use Content-type as your requirement undifined OR application/json**/
        })
        .then(function (response) {
            console.log(response.data)
            if (response.data.code === '200') {
                alert('Register success')
                console.log(response.data)
                console.log(response)
                navigate('/home')
            } else if (response.data.code === '202') {
                alert('Register fail')
            }

        })
        .catch(function (error) {
            console.log(error);
        });
       
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex bg-slate-600 h-screen align-middle justify-center mt-56 '>
     <Space direction="vertical" >
     <Card title="Register" className='bg-green-400' extra={<Link to="/">Sign In</Link>} style={{ width: 300 }}>
     <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Reffral ID"
      name="refer"
    
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
     {/* <Link to="/home" > */}
        <Button type="primary" htmlType="submit">
        Submit
      </Button>
      {/* </Link> */}
    </Form.Item>
  </Form>
    </Card>
     </Space>
    </div>
  )
}
