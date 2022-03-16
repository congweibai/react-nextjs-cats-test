import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import { Cat } from "../../data";

export default function cats() {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");

    const data = await response.json();
    console.log("data", data);
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className='container mt-5'>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {cats.map((cat) => {
            return (
              <Card
                name={cat.name}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
                id={cat.id}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
