import React from "react";
import { Button, Grid } from "@mui/material";

const TopButtons = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={2} md={2} mt={1}>
        <Button color="info" variant="contained" size="medium">
          My Jobs
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} md={2} mt={1}>
        <Button color="info" variant="contained" size="medium">
          My Interviews
        </Button>
      </Grid>
      <Grid
        item
        md={8}
        sm={7}
        mt={1}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Button color="success" variant="contained" size="medium">
          Create New Jobs
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopButtons;
