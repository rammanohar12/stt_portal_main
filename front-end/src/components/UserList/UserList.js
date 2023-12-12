import React, { useEffect, useState } from "react";
import SideNavbar from "../SideNavbar/SideNavbar";
import {
  Button,
  Chip,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import {
  getUsersList,
  registerUser,
  deleteUser,
} from "../../actions/authActions";
import { roleObj } from "../appConfig";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateUserModel from "../Models/CreateUserModel";
import "./UserList.css";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [serachText, setSearchText] = useState("");
  const [openCreateUserModel, setOpenCreateUserModel] = useState(false);

  const usersList = useSelector((state) => state.auth.usersList);
  const totalUserCount = useSelector((state) => state.auth.totalUserCount);
  const userDetails = useSelector((state) => state.auth.userDetails);

  const handleCreateProjectButtonClick = () => {
    setOpenCreateUserModel(true);
  };

  const onViewButtonClick = async (row) => {
    const { projectId } = row;
    // await dispatch(getProjectDetails({ projectId }));
  };

  const getUsersData = () => {
    dispatch(
      getUsersList({
        page,
        pageSize,
        serachText,
      })
    );
  };

  useEffect((e) => {
    getUsersData();
  }, []);
  useEffect(() => {
    getUsersData();
  }, [page]);
  const getRowId = (row) => row._id;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmitNewUserForm = (formData) => {
    dispatch(registerUser(formData));
    setOpenCreateUserModel(false);
  };

  const onDeleteButtonClick = async (userDetails) => {
    await dispatch(deleteUser({ apikey: userDetails.apikey }));
    getUsersData();
  };

  return (
    <div>
      {openCreateUserModel && (
        <CreateUserModel
          open={openCreateUserModel}
          onSubmitForm={handleSubmitNewUserForm}
          onClose={() => setOpenCreateUserModel(false)}
        />
      )}
      <div style={{ width: "100%" }}>
        <Grid container>
          <Grid container m={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <div className="heading-box">
                    <ViewListOutlinedIcon
                      style={{ paddingRight: "0.5rem", fontSize: "2rem" }}
                    />
                    <span className="header-font">Users List</span>
                  </div>
                  <span className="sub-heading">
                    Managing and Displaying Users Information
                  </span>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search by UserName/Email ID..."
                      onChange={handleInputChange}
                    />
                    <button
                      style={{
                        backgroundColor: "#4B49AC",
                        padding: "0.8rem 2.5rem",
                      }}
                      onSubmit={getUsersData}
                    >
                      Search
                    </button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  {userDetails?.role === "superAdmin" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        // padding: "1rem",
                        paddingTop: "1.2rem",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#4B49AC",
                          padding: "0.8rem 1.8rem",
                        }}
                        onClick={handleCreateProjectButtonClick}
                      >
                        + New User
                      </button>
                    </div>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Username
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Email ID
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Role
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {usersList.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">
                            {row.firstName + " " + row.lastName}
                          </TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="left">
                            {roleObj[row.role]}
                          </TableCell>
                          <TableCell align="left">
                            {
                              <div>
                                <Button
                                  onClick={() => {
                                    onViewButtonClick(row);
                                  }}
                                  sx={{ marginRight: "1rem" }}
                                  className="table-action-btn"
                                >
                                  <VisibilityOutlinedIcon />
                                </Button>
                                <Button
                                  onClick={() => {
                                    onDeleteButtonClick(row);
                                  }}
                                  className="table-action-btn"
                                >
                                  <DeleteIcon />
                                </Button>
                              </div>
                            }
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  marginTop: "2rem",
                }}
              >
                <Pagination
                  variant="outlined"
                  shape="rounded"
                  count={Math.ceil(totalUserCount / 10)}
                  page={page}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserList;
