import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./src/components/body/Body";
import Header from "./src/components/header/Header";

/**
 * Create React Element
 * At the end it returns an object
 * At the time of rendering in DOM it gets converted to DOM element
 */

// const heading = React.createElement(
//   "h1",
//   //used to give attributes to a tag
//   {
//     id: "heading",
//   },
//   "Hello World from react"
// );

// Way of rendering Child
// const element = React.createElement(
//   "div",
//   //used to give attributes to a tag
//   {
//     id: "child",
//   },
//   [React.createElement("h1", {}, "I am h1 tag")]
// );

// const jsxHeading = <h1 id="heading">Hello World from React</h1>;

/**
 * Create React Root and Render
 */

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
