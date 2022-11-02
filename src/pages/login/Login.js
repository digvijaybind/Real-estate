import React, { useState } from "react";
import { useStyles } from "./Loginpagecss";
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

  outline: none;
  color: #333333;
  transition: background-color 300ms;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;

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
const Login = () => {
  const classes = useStyles();
  const [showPassword, setshowPassword] = useState();

  return (
    <Container>
      <div className={classes.loginBox}>
        <div className={classes.logindetails}>
          <h1 className={classes.CreateAccount}>Welcome back</h1>
          <p className={classes.Signup}>Login with your google account</p>
          <button type="submit" className={classes.googlebtn}>
          <div className={classes.buttonmang}> <GoogleIcon className={classes.googlebutton} /> Continue with Google</div> 
          </button>
          <p className={classes.CreateMinute}>
            Or login with your email and password.
          </p>
          <p className={classes.AlreadyCreated}>
            New to Blits Estate?{" "}
            <a href="/" className={classes.LoginNow}>
              Signup free
            </a>
          </p>
          <form>
            <div className={classes.userdetails}>
              <p className={classes.TitleName} style={{ marginBottom: "0px" }}>
                Email ID
              </p>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Email"
                onChange={(e) => setshowPassword({ password: e.target.value })}
              />
            </div>
            <p className={classes.TitleName} style={{ marginBottom: "0px" }}>
              Password
            </p>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "@#$%&*" : "••••••••"}
              onChange={(e) => setshowPassword({ password: e.target.value })}
            />
            <label className={classes.Remeber}>
              <input
                type="checkbox"
                id="reme"
                name="reme"
                className={classes.RemeberRegister}
                style={{ accentColor: "green" }}
              />
              Remember Me
            </label>

            <div className={classes.Buttonmang}>
              <div className={classes.Forgetme}> Forgot password?</div>
              <div className={classes.investBtn}>Login now</div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
