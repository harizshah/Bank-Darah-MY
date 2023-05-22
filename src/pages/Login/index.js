import React from 'react';
import {Form, Input, Button, Radio} from "antd";
import {Link} from "react-router-dom";

function Login() {
    const [type, setType] = React.useState('donor');

    const onFinish = (values) =>{
        console.log(values)
    }
    return (
        <div className='flex h-screen items-center justify-center bg-primary'>
            <Form layout="vertical" className='bg-white rounded shadow grid  p-5 gap-5 w-1/3'
                  onFinish={onFinish}
            >
                <h1 className=" uppercase text-2xl">
                    <span className="text-primary">
                        {type.toUpperCase()} -LOGIN
                    </span>
                    <hr />
                </h1>

                <Radio.Group onChange={(e) => setType(e.target.value)} value={type}
                             className="">
                    <Radio value="donor">Donor</Radio>
                    <Radio value="hospital">Hospital</Radio>
                    <Radio value="organization">Organization</Radio>
                </Radio.Group>

                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input type="password"/>
                        </Form.Item>


                <Button type="primary" block className=""
                        htmlType="submit">
                    Login
                </Button>

                <Link to="/register" className=" text-center text-gray-700 underline">
                    Dont't have an account ? Register
                </Link>
            </Form>
        </div>
    )
}

export default Login;