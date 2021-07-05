import React from "react";
import ReactDOM from "react-dom";

const welcome = "Welcome to React and typescript";
const elem = <h1>Hello, {welcome}</h1>;

ReactDOM.render(
    elem,
    document.getElementById('root')
)
