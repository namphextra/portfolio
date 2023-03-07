"use client";
import { Input, InputLabel, InputAdornment, Button } from "@mui/material";
import { AccountCircle, PasswordRounded } from "@mui/icons-material";

export default function Login() {
  return (
    <div className="login">
      <InputLabel>Account</InputLabel>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      <InputLabel>Password</InputLabel>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <PasswordRounded />
          </InputAdornment>
        }
      />
      <Button variant="contained">Login</Button>
    </div>
  );
}
