import { UserOutlined, KeyOutlined, PhoneFilled } from "@ant-design/icons";
import { Button, DatePicker, Divider, Form, Input, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import React, { useState } from "react";
import SignFormFooter from "./SignFormFooter";
function SignUpForm() {
  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    dob: "",
    username: "",
    password: "",
    confirmPassword: "",
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
        layout="horizontal"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Space direction="horizontal">
          <FormItem
            key="firstname"
            allowClear
            hasFeedback
            name="firstname"
            rules={[
              {
                required: true,
                message: "Firstname is required",
              },
            ]}
          >
            <Input
              placeholder="Firstname"
              value={signUp.firstname}
              style={{
                width: "200px",
              }}
            />
          </FormItem>
          <FormItem
            key="lastname"
            allowClear
            hasFeedback
            name="lastname"
            rules={[
              {
                required: true,
                message: "Lastname is required",
              },
            ]}
          >
            <Input
              placeholder="Lastname"
              value={signUp.lastname}
              style={{
                width: "200px",
              }}
            />
          </FormItem>
        </Space>{" "}
        <br />
        <Space direction="horizontal">
          <FormItem
            key="dob"
            allowClear
            hasFeedback
            name="dob"
            rules={[
              {
                required: true,
                message: "Please select your DOB",
              },
            ]}
          >
            <DatePicker
              value={signUp.dob}
              style={{
                width: "200px",
              }}
            />
          </FormItem>
          <FormItem
            key="phone"
            allowClear
            hasFeedback
            name="phone"
            rules={[
              {
                required: true,
                message: "Phone Number is required",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              prefix={<PhoneFilled rotate={95} />}
              value={signUp.phone}
              style={{
                width: "200px",
              }}
            />
          </FormItem>
        </Space>
        <Divider
          orientationMargin="0"
          style={{
            borderColor: "white",
          }}
        />
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
            value={signUp.username}
            onChange={(e) =>
              setSignUp((prev) => {
                return {
                  ...prev,
                  username: e.target.value,
                };
              })
            }
            style={{
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
            value={signUp.password}
            onChange={(e) =>
              setSignUp((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            style={{
              width: "300px",
            }}
          />
        </FormItem>
        <FormItem
          label={<label className="text-white">Confirm Password</label>}
          name="confirmPassword"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password",
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
          key="confirmpassword"
        >
          <Input.Password
            placeholder="Confirm Password..."
            prefix={<KeyOutlined rotate={230} />}
            allowClear
            value={signUp.confirmPassword}
            onChange={(e) =>
              setSignUp((prev) => {
                return {
                  ...prev,
                  confirmPassword: e.target.value,
                };
              })
            }
            style={{
              width: "300px",
            }}
          />
        </FormItem>
        <FormItem key="signUpBtn">
          <Button type="primary" htmlType="submit" block className=" ml-16">
            Sign Up
          </Button>
        </FormItem>
      </Form>
      <SignFormFooter />
    </div>
  );
}

export default SignUpForm;
