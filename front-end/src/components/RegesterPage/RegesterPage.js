import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import "./LoginPage.css";
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
import { registerUser } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegesterPage = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterUser = async (e) => {
    // Implement your login logic here
    e.preventDefault();
    const userData = { username: email, password };
    await dispatch(registerUser(userData, history));
    navigate("/")
  };
  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="login-main-container"
      >
        <Grid item xs={8}>
          <div className="text-container">
            <img src={speechImage} className="stt-image-container" />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="login-container">
            <div className="login-card">
              <Container component="main" maxWidth="xs">
                <div className="login-card-inner">
                  <span className="login-card-title">Register</span>
                  <form>
                    <TextField
                      // margin="normal"
                      fullWidth
                      label="Email Address"
                      // variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
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
                      // margin="normal"
                      fullWidth
                      label="Password"
                      type="password"
                      // variant="outlined"
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
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
                      // margin="normal"
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      // variant="outlined"
                      size="small"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
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
                    <button
                      className="submit-button"
                      variant="contained"
                      onClick={handleRegisterUser}
                    >
                      Log in
                    </button>
                  </form>
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
