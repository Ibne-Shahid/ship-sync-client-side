import React from "react";
import logo from "/Web Development/Programming Hero/Assignments/B12A10/shipsync-client-side/src/assets/ship-wreck-icon-cartoon-vector-600nw-2266051349.webp"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-5xl font-extrabold text-blue-600">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for is not available.
        </p>
        <div className="mt-6">
          <img
            src={logo} 
            alt="ShipSync 404"
            className="mx-auto h-[150px]"
          />
        </div>
        <a
          href="/"
          className="btn btn-primary bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
