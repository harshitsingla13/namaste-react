const heading = React.createElement(
  "h1",
  //used to give attributes to a tag
  {
    id: "heading",
  },
  "Hello World from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
