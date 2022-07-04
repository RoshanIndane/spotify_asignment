import React from "react";
import "./titles.css";

export const Titles = ({ Icon, Tag }) => {
  return (
    <div className="box">
      <Icon />
      <p >{Tag}</p>
    </div>
  );
};
