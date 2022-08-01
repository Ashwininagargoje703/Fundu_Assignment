import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Sinup.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Googleauth} from '../sign-in/Googleauth'
import {useNavigate} from "react-router-dom"
const firebaseConfig = {
  apiKey: "AIzaSyBfqqmZv7MBkJETNQfri9U8lv2wxl05H7U",
  authDomain: "flowerstore-492cd.firebaseapp.com",
  projectId: "flowerstore-492cd",
  storageBucket: "flowerstore-492cd.appspot.com",
  messagingSenderId: "70805200129",
  appId: "1:70805200129:web:53def067e0873a5e068f00",
  measurementId: "G-L3NR19PTBL"
};
const app = initializeApp(firebaseConfig);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const auth = getAuth();
export function SignUpSide() {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var username = data.get("username");
    var email = data.get("email");
    var mobileno = data.get("mobileno")
    var password = data.get("password");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("user created succesfully");
        navigate("/signin")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

    console.log({
      username: data.get("username"),
     email : data.get("email"),
     mobileno: data.get("mobilno"),
      password: data.get("password"),
    });
  };

  return (
    <div style={{height: "80%"}}>
    <div className="devcont" sx={{height: '30%'}}>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "10vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={3}
            md={6}
            sx={{
              backgroundImage:
                "url(https://global.aorus.com/upload/Downloads/F_20220227195351X1J3tx.JPG)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={8}
            sm={5}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 6,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="dev1">
                <h3 className="dev5">SIGN UP FOR SALE UPDATES</h3>
              </div>
           
  <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobileno"
                  label="Mobile Number"
                  name="mobileno"
                  autoComplete="mobileno"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="agree to terms and condition"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2"></Link>
                  </Grid>
                  <Grid item>
                    <Link href="http://localhost:3000/signin" variant="body2">
                      {"Already have an account? Sign in"}
                    </Link>
                  </Grid>

                </Grid>
                <Grid item >
                  <Link href="http://localhost:3000/login" variant="body2">
                    {"LOGIN WITH OTP"}
                  </Link>
                  
                </Grid>
                {/* <Grid>
                
              </Grid> */}
             <Googleauth/>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
    </div>
  );
}
