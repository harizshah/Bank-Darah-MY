import React from 'react';
import {Form, Input,Button} from "antd";
import {Link} from "react-router-dom";
import React from "react";

function Register() {
    const [type, setType] = React.useState('donor');
    return (
        <div className='flex h-screen items-center justify-center bg-primary'>
            <Form layout="vertical" className='bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2'>
                <h1 className="col-span-2 uppercase text-2xl">
                    <span className="text-primary">DAFTAR / REGISTER - DONOR</span>
                    <hr />
                </h1>
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input />
                    </Form.Item>

                <Button type="primary" block className="col-span-2">
                    Register
                </Button>

                <Link to="/login" className="col-span-2 text-center text-gray-700 underline">
                    Already have an account? Login
                </Link>
            </Form>
        </div>
    )
}

export default Register;