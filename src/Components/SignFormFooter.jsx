import React from "react";
import { Divider, Space } from "antd";

function SignFormFooter() {
  return (
    <div className="w-full text-white">
      <Divider
        style={{
          color: "white",
          borderColor: "white",
        }}
        orientationMargin="0"
      >
        Or continue with
      </Divider>
      <Space className="w-full flex justify-center">
        <div>
          <a href="#">
            <img src="src/assets/facebook.png" alt="" className="w-[40px]" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="src/assets/apple.png" alt="" className="w-[40px]" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="src/assets/twitter.png" alt="" className="w-[40px]" />
          </a>
        </div>
      </Space>
    </div>
  );
}

export default SignFormFooter;
