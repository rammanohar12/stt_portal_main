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
import {
  getProjectList,
  getProjectDetails,
} from "../../actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

import "./ProjectList.css";

const ProjectsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [serachText, setSearchText] = useState("");

  const projectList = useSelector((state) => state.project.projectList);
  const totalCount = useSelector((state) => state.project.totalCount);

  const handleCreateProjectButtonClick = () => {
    navigate("/create-project");
  };

  const onViewButtonClick = async (row) => {
    console.log("reow", row);
    const { projectId } = row;
    await dispatch(getProjectDetails({ projectId }));
    navigate(`/app/project/view/${projectId}`);
  };

  const getProjectData = () => {
    dispatch(
      getProjectList({
        page,
        pageSize,
        serachText,
      })
    );
  };

  useEffect(() => {
    getProjectData();
  }, []);
  useEffect(() => {
    getProjectData();
  }, [page]);
  const getRowId = (row) => row._id;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNavbar />
      <div style={{ width: "100%" }}>
        <Grid container>
          <Grid container m={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "1rem",
                      // paddingLeft: "2rem",
                      color: "#4B49AC",
                    }}
                  >
                    <ViewListOutlinedIcon
                      style={{ paddingRight: "0.5rem", fontSize: "2rem" }}
                    />
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      Project List
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search by ProjectName/Hostname..."
                      onChange={handleInputChange}
                    />
                    <button
                      style={{
                        backgroundColor: "#4B49AC",
                        padding: "0.8rem 2.5rem",
                      }}
                      onSubmit={getProjectData}
                    >
                      Search
                    </button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
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
                      + Create Project
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                          ProjectName
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Hostname
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Created At
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {projectList.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row.projectName}</TableCell>
                          <TableCell align="left">{row.hostname}</TableCell>
                          <TableCell align="left">{row.createdAt}</TableCell>
                          <TableCell align="left">
                            {
                              <div>
                                <Button
                                  onClick={() => {
                                    onViewButtonClick(row);
                                  }}
                                >
                                  <VisibilityOutlinedIcon />
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
                  count={Math.ceil(totalCount / 10)}
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

export default ProjectsList;
