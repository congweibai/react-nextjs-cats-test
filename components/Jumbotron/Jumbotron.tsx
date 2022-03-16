import React from "react";
import { useRouter } from "next/router";

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className='jumbotron jumbotron-fluid mt-5'>
      <div className='container'>
        <h1 className='display-4'>Cats World</h1>
        <p className='lead'>
          Find your new best mate today. Adopt a wonder cat
        </p>
        <button
          type='button'
          onClick={() => {
            router.push("/cats");
          }}
          className='btn btn-primary'
        >
          Startlooking
        </button>
      </div>
    </div>
  );
}
