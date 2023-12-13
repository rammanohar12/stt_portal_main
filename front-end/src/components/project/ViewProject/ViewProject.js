import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SideNavbar from "../../SideNavbar/SideNavbar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import beautify from "js-beautify/js";
import { useSelector, useDispatch } from "react-redux";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./ViewProject.css";
import { useParams } from "react-router-dom";
import { getProjectDetails } from "../../../actions/projectActions";
import { reverselanguageMap } from "../../appConfig";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ViewProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [customWidget, setCustomWidget] = useState(false);
  const [isCopiedToClipBoard, setIsCopiedToClipBoard] = useState(false);

  const projectId = useParams().id;

  const projectDetails = useSelector((state) => state.project.projectDeatils);
  console.log(projectDetails);

  let initFnCallSnippet = () => {
    return beautify(`const init = async () => {
      const text = await voiceSearch.initSearch({
          projectId: "${projectId}",
          cb: (text) => {
              document.querySelector('.search-input').value = text;
          }
      })
  }
  init();
  const search = async () => {
    const text = await voiceSearch.voiceSearch({
        language: 'en'
    })
    document.querySelector('.search-input').value = text;
}

`);
  };

  let MIsCopiedToClipBoard = (status) => {
    setIsCopiedToClipBoard(true);
  };

  let getTextToCopy = () => {
    let snippetURL = "https://voice-search-sdk.reverieinc.com/bundle.js";
    return `
                  <script type="text/javascript" src=${snippetURL}></script> 
                  <script type="text/javascript">${initFnCallSnippet()}</script>
      `.trim();
  };

  let getSnippet = () => {
    let snippetURL = "https://voice-search-sdk.reverieinc.com/bundle.js";
    const scriptTag = `&lt;script type="text/javascript" src="${snippetURL}"&gt;&lt;&sol;script&gt;`;

    const anuvadakInitFnCall = `&lt;script type="text/javascript"&gt;<div style="margin-left: 1em; padding:0.2em;">${beautify(
      initFnCallSnippet()
    )}</div>&lt;&sol;script&gt;`;

    return (
      <div className={"flex-column"}>
        <div
          style={{ marginBottom: "1rem" }}
          dangerouslySetInnerHTML={{ __html: scriptTag.trim() }}
        />
        <div
          style={{ marginBottom: "3rem" }}
          dangerouslySetInnerHTML={{ __html: anuvadakInitFnCall.trim() }}
        />
      </div>
    );
  };

  const onBackButtonClick = () => {
    navigate("/projects");
  };

  useEffect(() => {
    dispatch(getProjectDetails({ projectId }));
  }, []);
  return (
    <div>
      <div>
        <Grid container>
          <Grid container m={1} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                sx={{
                  backgroundColor: "#4b49ac",
                  color: "white",
                  fontSize: "0.6rem",
                  ":hover": {
                    backgroundColor: "#4b49ac",
                    color: "white",
                  },
                }}
                size="small"
                onClick={onBackButtonClick}
              >
                <ArrowBackIcon
                  sx={{ marginRight: "0.3rem", fontSize: "1rem" }}
                />
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div
                style={{
                  width: "100%",
                  // backgroundColor: "white",
                }}
              >
                <Grid container spacing={2} rowSpacing={1} columnSpacing={1}>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="details-item">
                      <span className="details-item-head">Project Name :</span>
                      <span>{projectDetails.projectName}</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="details-item">
                      <span className="details-item-head">Hostname :</span>
                      <span>{projectDetails.hostname}</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className="details-item">
                      <span className="details-item-head"> CreateAt:</span>
                      <span>{projectDetails.createdAt}</span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={3}>
              <div style={{ backgroundColor: "white", padding: "1rem" }}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div style={{ padding: "1.5rem 0.5rem" }}>
                      <span className="title-text"> JS Snippet</span>
                    </div>
                  </Grid>
                  <Divider />
                  <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
                    <p>
                      Insert this JS snippet on the{" "}
                      <strong className="background-code-highlight">
                        &lt;head&gt;
                      </strong>{" "}
                      section of your website to start fetching content for
                      localization
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                    Custom Widget
                    <Checkbox
                      style={{ marginLeft: "10px" }}
                      checked={customWidget}
                      onChange={(e) => {
                        setCustomWidget(e.target.value);
                        MIsCopiedToClipBoard(false);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <pre id="snippet" className="code" style={{ border: 0 }}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "end",
                        }}
                      >
                        <CopyToClipboard
                          text={getTextToCopy()}
                          onCopy={() => MIsCopiedToClipBoard(true)}
                        >
                          {isCopiedToClipBoard ? (
                            <CheckCircleOutlineOutlinedIcon
                              className="copy-icon action-buttons"
                              style={{ color: "green" }}
                            />
                          ) : (
                            <ContentCopyOutlinedIcon className="copy-icon action-buttons" />
                          )}
                        </CopyToClipboard>
                      </div>
                      {getSnippet()}
                    </pre>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewProject;
