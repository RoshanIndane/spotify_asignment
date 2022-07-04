import React from "react";
import Card from "../card/card";

import "./Container.css";

const Container = ({ data, title }) => {
  console.log(data);
  return (
    <div className="row2_container">
      <div className="headContainer">
        <p>{title}</p>
        <div className="buttonContainer">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
      <div className="cardBox">
        {data.map((ele, i) => {
          if (ele.images === undefined) {
            return (
              <Card
                image={
                  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                name={ele}
              />
            );
          } else if (ele.images.length > 0) {
            const { url } = ele.images[0];
            return <Card image={url} name={ele.name} />;
          } else {
            return (
              <Card
                image={
                  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                name={ele.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Container;

// <Card image={ele.images.length?} />
