import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo-512X512.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Login() {
  const [userSessionCookie, setUserSessionCookie] = useState("");
  const [pageDataCookie, setPageDataCookie] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  return (
    <Box sx={{ background: "#d0d0d5", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Box sx={{ border: "3px solid #0a0a23", padding: "30px", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)", background: "#fff", marginTop: "70px", marginBottom: "30px" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={logo} alt="" height={"60px"} width={"60px"} />
          </Box>
          <Box>
            <Typography variant="h3" sx={{ color: "#1e212a", fontSize: "1.5rem", lineHeight: "60px", textAlign: "center" }}>
              Log in to freeCodeCamp solver
            </Typography>
          </Box>
          <Box>
            <form>
              <Box sx={{ margin: "20px 0px 20px 0px" }}>
                <TextField sx={{ width: "100%", border: "2px solid #1e212a" }} id="filled-textarea" placeholder="Paste the user session cookie." multiline minRows={2} maxRows={5} />
                <p style={{ maxWidth: "100%", fontSize: "11px", margin: "4px 0px" }}>Example: "connect.sid=***; _csrf=.+; csrf_token=***; jwt_access_token=***"</p>
              </Box>
              <Box sx={{ margin: "20px 0px 20px 0px" }}>
                <TextField sx={{ width: "100%", border: "2px solid #1e212a" }} id="filled-textarea" placeholder="Paste the page data cookie" multiline minRows={2} />
                <p style={{ maxWidth: "100%", fontSize: "11px", margin: "4px 0px" }}>Example: "gbuuid=***; __stripe_mid=***; __stripe_sid=***; _csrf=***; csrf_token=***; jwt_access_token=***"</p>
              </Box>
              <Box sx={{ margin: "20px 0px 20px 0px" }}>
                <Button sx={{ width: "100%", color: "#1e212a", background: "#f1be32", padding: "15px" }}>Continue with cookie</Button>
              </Box>
            </form>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "18px", color: "#1e212a", textAlign: "center" }}>
              Don't have an account yet?
              <span style={{ marginLeft: "10px" }}>
                <a
                  target="_blank"
                  href="https://auth.freecodecamp.org/u/signup/identifier?state=hKFo2SBydG5PSzRpdHRERXBUNk16cXlVd2JaYkJhWFJzSUdENaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGxmdFpFOFV5ZTBoR3pqT1pSWFh4VkE3SlU0ZG1OV21no2NpZNkgYVVEdjlqVnFUZnhCUkUxbDYwTkE1QWY3eVRDR0U0Y3k"
                  style={{ color: "#635dff", textDecoration: "none" }}
                >
                  Sign up
                </a>
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "30px 100px" }}>
        <Box sx={{ width: "800px" }}>
          <Typography sx={{ textAlign: "start", fontSize: "18px" }}>
            <span style={{ marginRight: "5px" }}>
              <a href="/" style={{ fontSize: "20px" }}>
                freeCodeCamp solver
              </a>
            </span>
            is just a fun project. Here we are trying to experience you something fun.
          </Typography>
          <ul style={{ margin: "10px" }}>
            <li style={{ margin: "10px 0px" }}>Please, don't use this platform to harm anyone or any organization.</li>
            <li style={{ margin: "10px 0px" }}>Please, don't share any of your credential like email, password or anything else.</li>
            <li style={{ margin: "10px 0px" }}>
              We just use your login cookie to make sure you can keep your account safe. We require the cookie to do the server call for you and this cookies are valid until you logout of the session
              on
              <span style={{ margin: "0px 5px" }}>
                <a href="https://www.freecodecamp.org" target="_blank">
                  freecodecamp.org
                </a>
              </span>
              site, once you logout these cookies are no more valid so, your account is totally safe.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
