import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="home">
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
    </div>
  );
}
