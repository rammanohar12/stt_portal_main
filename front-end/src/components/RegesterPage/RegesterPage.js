import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./RegisterPage.css";
import speechImage from "../../asserts/specch-text.jpg";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { registerUser, sendOtp } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegesterPage = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegisterUser = async (e) => {
    // Implement your login logic here
    e.preventDefault();
    const userData = { firstName, lastName, email, password };
    dispatch(registerUser(userData, history));
    navigate("/");
  };

  const handleSendOtpButtonClick = () => {
    dispatch(sendOtp());
  };

  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="login-main-container"
      >
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <div className="text-container">
            <img src={speechImage} className="stt-image-container" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="login-container">
            <div className="login-card">
              <Container component="main" maxWidth="xs">
                <div className="login-card-inner">
                  <span className="login-card-title">Sign Up </span>
                  <form>
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      className="form-text-box"
                      size="small"
                    />
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      className="form-text-box"
                      size="small"
                      sx={{ marginTop: "1rem" }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-text-box"
                      size="small"
                      sx={{ marginTop: "1rem" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ cursor: "pointer" }}
                          >
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Password"
                      type="password"
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="form-text-box"
                      sx={{ marginTop: "1rem" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ cursor: "pointer" }}
                          >
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Confirm Password"
                      type="password"
                      size="small"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      className="form-text-box"
                      sx={{ marginTop: "1rem" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ cursor: "pointer" }}
                          >
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {/* <div className="phone-field-box">
                      <TextField
                        placeholder="Phone Number"
                        type="text"
                        size="small"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className="form-text-box"
                        sx={{ width: "75%" }}
                      />
                      <button
                        className="otp-btn"
                        onClick={handleSendOtpButtonClick}
                      >
                        Send OTP
                      </button>
                    </div> */}
                    <button
                      className="submit-button"
                      onClick={handleRegisterUser}
                    >
                      Register
                    </button>
                  </form>
                  <div className="bottom-box">
                    <span>Already have an account ?</span>
                    <a href="/">Log in</a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegesterPage;
