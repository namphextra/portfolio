"use client";
import { Input, InputLabel, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
    </div>
  );
}
