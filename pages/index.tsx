import React from "react";
import { Typography } from "@mui/material";
import { Layout } from "../components/layouts";

export function HomePage() {
  return (
    <Layout>
      <Typography color="secondary" variant="h1">
        Hola Mundo
      </Typography>
    </Layout>
  );
}

export default HomePage;
