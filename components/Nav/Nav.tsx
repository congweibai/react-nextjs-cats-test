import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>
          <Link href='/'>Home</Link>
        </span>
      </div>
    </nav>
  );
}
