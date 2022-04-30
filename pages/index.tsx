import React from "react";
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

export function HomePage() {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="To Do" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default HomePage;
