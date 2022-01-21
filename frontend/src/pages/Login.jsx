import React from "react";

import { Form, Input, Button, Checkbox, Layout, Row, Col, Divider, Tooltip } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { login } from "@/redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/redux/auth/actions";
import { selectAuth } from "@/redux/auth/selectors";
const { Content, Footer } = Layout;

const LoginPage = () => {
  // const [error, setError] = useState();

  // const { setAdminData } = useContext(AdminContext);
  // const history = useHistory();
  const { loading: isLoading } = useSelector(selectAuth);
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setInputs((inputs) => ({ ...inputs, [name]: value }));
  // }
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
  };


  
  return (
    <>
      <Layout className="layout">
        <Row>
          <Col span={12} offset={6}>
            <Content
              style={{
                padding: "150px 0 180px",
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              
              <h1>Selamat datang di SI Satgas Covid-19 UGM</h1>
              <h4>Silahkan login!</h4>
              {/* {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )} */}
              <Divider />
              <div className="site-layout-content">
                {" "}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Mohon untuk mengisi username",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="username"
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Mohon untuk mengisi password",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Ingat Saya</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    <Tooltip title="Jika memiliki kendala dengan password bisa menghubungi Sekretariat Satgas Covid-19 UGM">
                      <span>Lupa password?</span>
                    </Tooltip>
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={isLoading}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Content>
          </Col>
        </Row>

        <Footer style={{ textAlign: "center" }}>
         Brought to you by Vidia Setiadi ©2021 Universitas Gadjah Mada
        </Footer>
      </Layout>
    </>
  );
};

export default LoginPage;
