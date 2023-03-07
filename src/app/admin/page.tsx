"use client";

import { Container, Button } from "@mui/material";

export default function Admin() {
  return (
    <Container className="flex">
      <aside className="w-1/12">
        <Button>New</Button>
      </aside>
      <div className="content__container flex-1">Container</div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
