import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import expiredJobsData from "./expiredJobsData";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  NativeSelect,
  Pagination,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

const Accordian = () => {
  const [accordianId, setAccordianId] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [search, setSeacrh] = React.useState("");

  //pagination
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedData = expiredJobsData.slice(startIndex, endIndex);

  const searchingList = paginatedData.filter((item) =>
    item.jobTitile.toLowerCase().includes(search.toLowerCase())
  );

  //adding view application button
  expiredJobsData.forEach((ele, i) => {
    ele.view = (
      <Button
        variant="contained"
        color="success"
        startIcon={<RemoveRedEyeOutlinedIcon />}
      >
        View Applicants
      </Button>
    );
  });
  const handleChange = (id) => {
    setAccordianId(accordianId === id ? null : id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {/* upper accordian  summery only */}
      <AccordionSummary
        sx={{ boxShadow: 1, marginTop: 2, backgroundColor: "white" }}
      >
        <Grid container>
          <Grid item display={{ xs: "none", md: "flex" }} alignItems="center">
            <Typography mr={1}>Sort by:</Typography>
            <FormControl>
              <NativeSelect>
                <option>abc</option>
                <option>efg</option>
                <option>hij</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
          >
            <CalendarMonthOutlinedIcon />
            <Typography mr={2}>Most recent</Typography>
            <ArrowDownwardOutlinedIcon />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="standard"
              onChange={(e) => setSeacrh(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </AccordionSummary>

      {/* dynamic accordian  */}
      <Box mt={1}>
        {searchingList.map(
          (
            {
              date,
              id,
              jobTitile,
              IncompleteApplications,
              applicants,
              distortions,
              edit,
              fits,
              hiringManager,
              jobDesc,
              location,
              owner,
              rePost,
              strongFits,
              weakFits,
              view,
            },
            i
          ) => {
            return (
              <React.Fragment key={id + "" + jobTitile}>
                <Accordion
                  expanded={accordianId === id}
                  onChange={() => handleChange(id)}
                >
                  <AccordionSummary>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        display="flex"
                        justifyContent={{
                          xs: "space-between",
                          sm: "flex-start",
                        }}
                        alignItems="center"
                      >
                        <FormControlLabel control={<Checkbox />} />

                        <IconButton
                          sx={{ backgroundColor: "grey", color: "white" }}
                        >
                          <DoDisturbIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography
                          variant="h6"
                          sx={{ color: "text.secondary" }}
                        >
                          {jobTitile}
                        </Typography>
                        <Typography
                          variant="button"
                          sx={{ color: "text.secondary" }}
                        >
                          {date}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        sm={4}
                        xs={12}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <ExpandMoreIcon />
                        <Button variant="contained" size="small" color="info">
                          Start hiring
                        </Button>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Typography p={1}>
                          <b>Location: </b>
                          {location}
                        </Typography>
                        <Typography p={1}>
                          <b>Owner: </b>
                          {owner}
                        </Typography>
                        <Typography p={1}>
                          <b>Hiring Manager: </b>
                          {hiringManager}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          display="flex"
                          alignItems="center"
                        >
                          <InsertDriveFileOutlinedIcon /> <b>{applicants}</b>
                        </Typography>
                        <Typography p={1}>
                          Strong Fits:
                          {strongFits}
                        </Typography>
                        <Typography p={1}>
                          Fits:
                          {fits}
                        </Typography>
                        <Typography p={1}>
                          Weak Fits:
                          {weakFits}
                        </Typography>
                        <Typography p={1}>
                          Distortions:
                          {distortions}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          display="flex"
                          alignItems="center"
                        >
                          <FileOpenOutlinedIcon />
                          <b>
                            {IncompleteApplications} Incomplete Applications
                          </b>
                        </Typography>
                      </Grid>
                      <Grid item md={1} display={{ xs: "none", md: "flex" }}>
                        <Divider orientation="vertical" />
                      </Grid>

                      <Grid item xs={12} md={5}>
                        <Typography>{view}</Typography>
                        <Typography display="flex" alignItems="center" p={1}>
                          <EditOutlinedIcon />
                          {edit}
                          <Tooltip
                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                            placement="right"
                          >
                            <InfoOutlinedIcon fontSize="small" />
                          </Tooltip>
                        </Typography>
                        <Typography display="flex" alignItems="center" p={1}>
                          <FileCopyOutlinedIcon />
                          {rePost}
                          <Tooltip
                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                            placement="right"
                          >
                            <InfoOutlinedIcon fontSize="small" />
                          </Tooltip>
                        </Typography>
                        <Typography display="flex" alignItems="center" p={1}>
                          <FindInPageOutlinedIcon />
                          {jobDesc}
                          <Tooltip
                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                            placement="right"
                          >
                            <InfoOutlinedIcon fontSize="small" />
                          </Tooltip>
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </React.Fragment>
            );
          }
        )}
      </Box>
      {/* pagination  */}
      <Stack
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Pagination
          count={Math.ceil(expiredJobsData.length / 10)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </>
  );
};
export default Accordian;
