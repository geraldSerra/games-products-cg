import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css"

export default function PaginationRounded() {
  return (
    <Stack spacing={4} >
      <Pagination
        count={11}
        shape="rounded"
        boundaryCount={1}
        variant="outlined"
        color="primary" 
        className="pagonation"
      />
    </Stack>
  );
}
