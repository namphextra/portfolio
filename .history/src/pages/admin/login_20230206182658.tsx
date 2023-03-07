import { useSession, signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && <>Not signed in</>}
      <Button onClick={() => signIn()} variant="contained">
        Sign in
      </Button>
    </div>
  );
}
