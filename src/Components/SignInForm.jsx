import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import React, { useState } from "react";
import SignFormFooter from "./SignFormFooter";

function SignInForm() {
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });

  const onFinish = (success) => {
    console.log(success);
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };
  return (
    <div id="loginform">
      <Form
        className=""
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <FormItem
          label={<label className="text-white">Username</label>}
          key="username"
          name="username"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please, enter your username",
            },
          ]}
          className="text-white"
        >
          <Input
            placeholder="Enter Username..."
            prefix={<UserOutlined />}
            allowClear
            value={signIn.username}
            onChange={(e) =>
              setSignIn((prev) => {
                return {
                  ...prev,
                  username: e.target.value,
                };
              })
            }
            style={{
              height: "40px",
              width: "300px",
            }}
          />
        </FormItem>

        <FormItem
          label={<label className="text-white">Password</label>}
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 8,
              message: "Password cannot be less than 8 characters",
            },
            {
              max: 32,
              message: "Password cannot be less than 32 characters",
            },
          ]}
          key="password"
        >
          <Input.Password
            placeholder="Enter Password..."
            prefix={<KeyOutlined rotate={230} />}
            allowClear
            value={signIn.password}
            onChange={(e) =>
              setSignIn((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            style={{
              height: "40px",
              width: "300px",
            }}
          />
        </FormItem>
        <FormItem key="signInBtn">
          <Button type="primary" htmlType="submit" size="large" block>
            Sign In
          </Button>
        </FormItem>
      </Form>
      <SignFormFooter />
    </div>
  );
}

export default SignInForm;
