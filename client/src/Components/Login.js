import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Container } from "react-bootstrap";

export default function Login() {
  const [state,setState] = useState(false)
  return (
    <div>
      <br />
      <h1 className="text-center">Login Page </h1>
      <Container className="cardLogin">
        {state?
       <div>
       <label for="fname">First name:</label>
       <input type="text" id="fname" name="fname"/>
       <br />
       <br />
       <label for="lname">Last name:</label>
       <input type="text" id="lname" name="lname"/>
       <br />
       </div>:
        <div>
        <label for="fname">First name:</label>
        <input type="text" style={{border:"none"}} disabled id="fname" name="fname"/>
        <br />
        <br />
        <label for="lname">Last name:</label>
        <input type="text" style={{border:"none"}} disabled id="lname" name="lname"/>
        <br />
        </div>  
      }
       
        <br />
        <BootstrapSwitchButton
          checked={true}
          onlabel="Edit"
          offlabel="Read"
          width={100}
          onstyle="danger"
          offstyle="primary"
          onChange={(checked) => {
            setState(!state)
          }}
        />
      </Container>
    </div>
  );
}
