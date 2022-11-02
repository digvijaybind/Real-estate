import React, { useState } from "react";
import { useStyles } from "./Registerpagecss";
import styled from "styled-components";
import Waveimage from "../../asset/image/Wave.svg";
import GoogleIcon from "@mui/icons-material/Google";
const Input = styled.input`
  display: block;
  padding: 12px;
  font-size: 14px;
  line-height: 16px;
  /* width: 300px; */
  width: 100%;
  border: none;
  background-color: #ffffff;
  outline: none;
  color: #333333;
  transition: background-color 300ms;

  &::placeholder {
    color: #b3b3b3;
  }
`;
const Container = styled.div`
  background-image: url(${Waveimage});
  width: auto;
  height: auto;
  background-repeat: no-repeat !important;
  background-size: cover;
`;
const Register = () => {
  const classes = useStyles();
  const [showPassword, setshowPassword] = useState();
  return (
    <Container>
      <div className={classes.loginBox}>
        <div className={classes.logindetails}>
          <h1 className={classes.CreateAccount}>Create a Account</h1>
          <p className={classes.Signup}>Signup with your google account</p>
          <button type="submit" className={classes.googlebtn}>
          <div className={classes.buttonmang}> <GoogleIcon className={classes.googlebutton} /> Continue with Google</div> 
          </button>
          <p className={classes.CreateMinute}>
            Or get it created in less than a minute
          </p>
          <p className={classes.AlreadyCreated}>
            Already have an account{" "}
            <a href="/" className={classes.LoginNow}>
              Login now
            </a>
          </p>
          <form>
            <div className={classes.userdetails}>
              <div>
                <p
                  className={classes.TitleName}
                  style={{ marginBottom: "0px" }}
                >
                  Full name
                </p>
                <input
                  className={classes.UserName}
                  name="username"
                  label="name"
                  floatingLabelText="user name"
                  placeholder=" Enter your name"
                />
              </div>
              <div>
                <p
                  className={classes.TitleName}
                  style={{ marginBottom: "0px", paddingLeft: "15px" }}
                >
                  Email id
                </p>
                <input
                  className={classes.Email}
                  name="email"
                  floatingLabelText="email"
                  placeholder="binseva@gmail.com "
                />
              </div>
            </div>
            <p className={classes.TitleName} style={{ marginBottom: "0px" }}>
              Password
            </p>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "!itc3$vx" : "••••••••"}
              onChange={(e) => setshowPassword({ password: e.target.value })}
            />

            <p className={classes.Downaccount}>
              By creating an account, I’m accepting the{" "}
              <a className={classes.termscondition}>terms and conditions </a>{" "}
            </p>
            <br />
            <div className={classes.Buttonmang}>
              <div className={classes.investBtn}>Register now</div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
