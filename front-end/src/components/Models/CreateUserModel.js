import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import { roleObj } from "../appConfig";
import "./userModel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CreateUserModel = ({ open, onSubmitForm, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async () => {
    const formData = {
      email,
      firstName,
      lastName,
      phoneNumber,
      role,
      password,
      confirmPassword,
    };
    onSubmitForm(formData);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{overflow:'auto'}}
    >
      <Box sx={{ ...style }}>
        <div className="model-header-box">
          <Typography
            variant="h6"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Create New User
          </Typography>
          <span style={{ cursor: "pointer" }} onClick={onClose}>
            <CloseIcon />
          </span>
        </div>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Firstname"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Lastname"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
              <TextField
                margin="normal"
                fullWidth
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="form-text-box"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                //label="Role"
                fullWidth
                size="small"
                placeholder="Select Role"
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                {Object.keys(roleObj).map((role) => {
                  return <MenuItem value={role}>{roleObj[role]}</MenuItem>;
                })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12} xl={12} mt={3} mb={3}>
              <div>
                <Button
                  variant="contained"
                  className="submit-button"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateUserModel;
