import React from "react";
import Nav from "../components/Nav/Nav";

export default function DefaultLayout({ children }: { children: any }) {
  return (
    <div>
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
}
