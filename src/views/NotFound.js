import React from 'react'
import "../assets/css/notFound.css"
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();
  return (
    <section className="section-not-found">
      <h1>Ups !</h1>
      <p className="p-2 text-justify">La página que buscas no se encuentra disponible</p>

      <div className="container d-flex flex-column align-items-center back-to-home">

        <button
          type="button"
          className="btn btn-success w-50 mx-auto mt-3"
          onClick={() => {
            navigate('/');
          }}
        >
          Volver al Home
        </button>
      </div>
    </section>
  )
}
