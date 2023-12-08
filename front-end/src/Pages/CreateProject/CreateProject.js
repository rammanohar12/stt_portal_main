import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import { Grid, TextField, Typography } from "@mui/material";
import { allLanguageMap } from "../../components/appConfig";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./CreateProject.css";
import { createProject } from "../../actions/projectActions";
import { useDispatch, useSelector } from "react-redux";

const CreateProject = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  const [hostname, setHostname] = useState("");
  const [language, setLanguage] = useState("");
  const [elementName, setElementName] = useState("");
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmitCreateProjectForm = async (e) => {
    e.preventDefault();
    const projectData = {
      projectName,
      hostname,
    };
    dispatch(createProject(projectData));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNavbar />
      <div style={{ width: "100%" }}>
        <Grid container>
          <Grid
            container
            m={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "50%", height: "90vh", backgroundColor: "white" }}
            >
              <div>
                <Grid container p={5}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        paddingLeft: "2rem",
                        color: "#4B49AC",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        Create New Project
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <span
                          style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}
                        >
                          Project Name:
                        </span>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setProjectName(e.target.value)}
                          value={projectName}
                          style={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                        <span
                          style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}
                        >
                          Hostname:
                        </span>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setHostname(e.target.value)}
                          value={hostname}
                          style={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                        <span
                          style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}
                        >
                          Element Name:
                        </span>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setElementName(e.target.value)}
                          value={elementName}
                          style={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                        <span
                          style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}
                        >
                          Language:
                        </span>
                        <div>
                          <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            fullWidth
                            size="small"
                            onChange={(e) => setLanguage(e.target.value)}
                            MenuProps={MenuProps}
                          >
                            {Object.keys(allLanguageMap).map((lang) => (
                              <MenuItem
                                key={allLanguageMap[lang]}
                                value={lang}
                                // style={getStyles(name, personName, theme)}
                              >
                                {lang}
                              </MenuItem>
                            ))}
                          </Select>
                        </div>
                      </Grid> */}
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                        <button
                          style={{ backgroundColor: "#4B49AC" }}
                          onClick={handleSubmitCreateProjectForm}
                        >
                          Create Project
                        </button>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CreateProject;
