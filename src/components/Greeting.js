import React from "react";

let myDate = new Date();
let hours = myDate.getHours();
let greeting = "";

const Greeting = () => {
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
  } else if (hours >= 17 && hours <= 24) {
    greeting = "Good Evening";
  } else {
    greeting = "Hello There";
  }
  return (
    <section className="title">
      <div className="titleContainer">
        <h1>{`${greeting}`}</h1>
      </div>
    </section>
  );
};

export default Greeting;
