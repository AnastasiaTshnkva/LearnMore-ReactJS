import React from "react";
import ReactDom from "react-dom/client";
import './assets/styles/styles.scss'

import App from "./App.jsx"


const root = ReactDom.createRoot(
    document.getElementById('root')
);

root.render(<App/>)

// ReactDom.render(<App/>, document.getElementById('root'));