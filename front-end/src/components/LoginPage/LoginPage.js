import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./LoginPage.css";
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
import { loginUser } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = async (e) => {
    // Implement your login logic here
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
    // if (isAuthenticated) {
    //   navigate("/dashboard");
    // }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
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
                <CssBaseline />
                <div className="login-card-inner">
                  <span className="login-card-title">Sign In</span>
                  <form>
                    <TextField
                      margin="normal"
                      fullWidth
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-text-box"
                      size="small"
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
                      margin="normal"
                      fullWidth
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="form-text-box"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ cursor: "pointer" }}
                          >
                            <span onClick={() => setShowPassword(true)}>
                              <Lock />
                            </span>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <button className="submit-button" onClick={handleLogin}>
                      Log in
                    </button>
                  </form>
                </div>
                <div className="login-sub-card">
                  <a href="/register">Register</a>
                  <a href="/forgot-password">Forgot Password</a>
                </div>
              </Container>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
