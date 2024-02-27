import { Box, Button, Typography } from "@mui/material";
import notFoundImg from "../../assets/freeCodeCamp-404.svg";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", height: "calc(100vh - 50px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <img src={notFoundImg} width={"480px"} alt="" />
        <Typography sx={{ fontSize: "30px", margin: "30px" }}>Page not found.</Typography>
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          Back to home
        </Button>
      </Box>
    </Box>
  );
}
