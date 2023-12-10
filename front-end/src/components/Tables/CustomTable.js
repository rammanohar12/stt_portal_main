import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomTable = () => {
  return (
    <div>
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
  );
};

export default CustomTable;
