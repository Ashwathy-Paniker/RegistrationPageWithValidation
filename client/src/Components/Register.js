import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { addUser } from "../config/MyService";
import { CgComment } from "react-icons/cg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForpassword = RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export default function Register() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");
  const [state,setState] = useState(false)

  const navigate = useNavigate();

  const register = () => {
    let formdata = {
      fname: fname,
      lname: lname,
      mobile: mobile,
      email: email,
      password: password,
      gender: gender,
    };

    addUser(formdata).then((res) => {
      if (res.data.err) {
        alert(res.data.err);
      } else {
        alert(res.data.msg);
        navigate("/login");
      }
    });
  };

  return (
    <>
      <br />
      <Container fluid>
        <Row className="row">
          <Col md={12} xs={12} lg={7} >
            <img src="./images/reg1.jpg" alt="registartion page"className="img-fluid" height="100%" width="100%" />
            {/* <h1>Register</h1> */}
          </Col>
          <Col md={12} xs={12} lg={5}>
            <Container className="container cardLogin">
              <h1 className="text-center">
                <CgComment size="50px" style={{ color: "blue" }} /> SignUp
              </h1>
              <br />
              <br />
              {state?
              <Form className="container">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    id="fname"
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                    required
                  />
                  {fname != "" && fname.length < 4 && (
                    <span className="text-danger">
                      Enter FirstName correctly
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    id="lname"
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                    required
                  />
                  {lname != "" && lname.length < 4 && (
                    <span className="text-danger">
                      Enter LastName correctly
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    id="mobile"
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                    required
                  />
                  {mobile != "" && mobile.length < 10 && (
                    <span className="text-danger">
                      Enter 10 Digits Mobile Number !
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                  />
                  {email != "" && !regForEmail.test(email) && (
                    <span className="text-danger">
                      Enter Email correctly including @{" "}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    required
                  />
                  {password != "" && !regForpassword.test(password) && (
                    <span className="text-danger">
                      Password must include UpperCase , Lowercase , Symbols,
                      Numbers !
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter ConfirmPassword"
                    name="confirmpassword"
                    id="confirmpassword"
                    onChange={(event) => {
                      setConfirmpassword(event.target.value);
                    }}
                    required
                  />
                  {confirmpassword != "" && confirmpassword != password && (
                    <span className="text-danger">Passwords doesn't match</span>
                  )}
                </Form.Group>
                <br />
                <div className="mb-3">
                  <label className="pr-2">Gender:&nbsp;</label>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    className="mt-1 pl-2"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />{" "}
                  Male &nbsp;
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    className="mt-1 pl-2"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />{" "}
                  Female
                </div>

                <Col className="text-center">
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={register}>
                      Submit
                    </Button>
                  </div>
                </Col>
                <br />
                <Col className="text-center">
                  <p className=" text-center">
                    {" "}
                    <Link to="/login">Click here to Login </Link>
                  </p>
                </Col>
              </Form>
              :
              <Form className="container">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="fname"
                  id="fname"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setFname(event.target.value);
                  }}
                  required
                />
                {fname != "" && fname.length < 4 && (
                  <span className="text-danger">
                    Enter FirstName correctly
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lname"
                  id="lname"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                  required
                />
                {lname != "" && lname.length < 4 && (
                  <span className="text-danger">
                    Enter LastName correctly
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  id="mobile"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setMobile(event.target.value);
                  }}
                  required
                />
                {mobile != "" && mobile.length < 10 && (
                  <span className="text-danger">
                    Enter 10 Digits Mobile Number !
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
                {email != "" && !regForEmail.test(email) && (
                  <span className="text-danger">
                    Enter Email correctly including @{" "}
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
                {password != "" && !regForpassword.test(password) && (
                  <span className="text-danger">
                    Password must include UpperCase , Lowercase , Symbols,
                    Numbers !
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter ConfirmPassword"
                  name="confirmpassword"
                  id="confirmpassword"
                  style={{border:"none"}} disabled
                  onChange={(event) => {
                    setConfirmpassword(event.target.value);
                  }}
                  required
                />
                {confirmpassword != "" && confirmpassword != password && (
                  <span className="text-danger">Passwords doesn't match</span>
                )}
              </Form.Group>
              <br />
              <div className="mb-3">
                <label className="pr-2">Gender:&nbsp;</label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  className="mt-1 pl-2"
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                />{" "}
                Male &nbsp;
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  className="mt-1 pl-2"
                  onChange={(event) => {
                    setGender(event.target.value);
                  }}
                />{" "}
                Female
              </div>

              <Col className="text-center">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={register}>
                    Submit
                  </Button>
                </div>
              </Col>
              <br />
              <Col className="text-center">
                <p className=" text-center">
                  {" "}
                  <Link to="/login">Click here to Login </Link>
                </p>
              </Col>
              
            </Form>   }
            <BootstrapSwitchButton
          checked={false}
          onlabel="Read"
          offlabel="Edit"
          width={100}
          onChange={(checked) => {
            setState(!state)

          }}
        />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
