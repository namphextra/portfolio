"use client";

import { Container } from "@mui/material";

export default function Admin() {
  return (
    <Container className="flex">
      <aside className="w-1/12">Sub Menu</aside>
      <div className="content__container">Container</div>
      <aside className="w-2/12">Main Menu</aside>
    </Container>
  );
}
