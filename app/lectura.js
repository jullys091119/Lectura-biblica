"use client";
import React, { useEffect, useState } from "react";

export default function LecturaBiblica() {
  const [lectura, setLectura] = useState([]);

  useEffect(() => {
    fetch("/lectura.json")
      .then((res) => res.json())
      .then((data) => setLectura(data))
      .catch((err) => console.error("Error cargando lectura:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {lectura.map((parrafo, i) => (
        <p key={i} className="text-lg leading-relaxed" style={{marginBottom: 200}}>
          {parrafo}
        </p>
      ))}
    </div>
  );
}
