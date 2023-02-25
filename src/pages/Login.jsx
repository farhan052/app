import { Button, Card, Checkbox, Form, Input, Space } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// async function loginUser(creditential){
//   console.log(creditential)
//   return fetch('http://localhost:5000/login',{
//     method: 'POST',
//     headers: {
//       'Content-Type' :'applicaton.json'
//     },
//     body :JSON.stringify(creditential)
//   }).then((data) =>{
//     data.json()
//   })
// }
const fillForm = async (username, password, values) => {
  // ?username=${username}&password=${password}`//
  axios
    .get(
      `http://localhost:5000/login`,values,{
        headers: {'Content-Type': undefined,
      }
         /** Use Content-type as your requirement undifined OR application/json**/
      }
    )
    .then((res) => {
      let a = res.data[0];
      console.log(res)
      
    });
};
function Login() {
  const navigate= useNavigate();
  const [username, setusername] = useState()
  const [password, setpassword] = useState()
  const onFinish = async(values) => {
    setusername(values.username)
    setpassword(values.password)
    console.log('Success:', values);
    await fillForm(username, password)
    navigate('home')
    // 
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
        <Space direction="vertical" >
     <Card title="login" className='bg-blue-200' extra={<Link to="/reg">New User</Link>} style={{ width: 300 }}>
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

export default Login
