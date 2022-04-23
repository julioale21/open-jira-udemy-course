import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "../components/layouts";

export function HomePage() {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="To Do" />
            <CardContent>{/* add new task */}</CardContent>
            <CardContent>{/* listing tasks */}</CardContent>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default HomePage;
