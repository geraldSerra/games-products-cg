import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ButtonNav({ label, icon }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        endIcon={icon}
        sx={{
          bgcolor: "green",
          height: "30px",
          width: "85px",
          fontSize: "10px",
        }}
      >
        {label}
      </Button>
    </Stack>
  );
}
