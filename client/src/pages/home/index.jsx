import { Box, Typography } from "@mui/material";
export default function Home() {
  return (
    <Box>
      <Typography variant="h1" color="initial" sx={{ textAlign: "center", fontSize: "32px", margin: "30px" }}>
        All available courses
      </Typography>
      <CourseCart />
      <Box></Box>
    </Box>
  );
}
