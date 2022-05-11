import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Sceleton() {
  let h = 50;
  return (
    <Box sx={{ width: 600 }}>
      <Skeleton height={h} />
      <Skeleton height={h} animation="wave" />
      <Skeleton height={h} animation="wave" />
      <Skeleton height={h} animation="wave" />
      <Skeleton height={h} animation="wave" />
      <Skeleton height={h} animation="wave" />
      <Skeleton height={h} animation="wave" />
    </Box>
  );
}
