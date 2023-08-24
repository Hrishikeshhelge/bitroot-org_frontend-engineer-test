import React from "react";
import "./Profile.css";
import API from "./records.json";

export default function Profile() {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
      };

    
  return (
    <div className="Card">
      <h1>Hello From Profile Component</h1>
    </div>
  );
}
