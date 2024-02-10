import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
const heading = React.createElement(
    'h1',
    //used to give attributes to a tag
    {
        id: 'heading'
    },
    'Hello World from react'
);

// Way of rendering Child
// const element = React.createElement(
//   "div",
//   //used to give attributes to a tag
//   {
//     id: "child",
//   },
//   [React.createElement("h1", {}, "I am h1 tag")]
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
