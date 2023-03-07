"use client";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <div className="login">
      <TextField label="Account" variant="standard" />
      <TextField label="Password" variant="standard" />
    </div>
  );
}
