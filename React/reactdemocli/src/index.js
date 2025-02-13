import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./app";
// 18新写法
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// 严格模式 <React.StrictMode><App/></React.StrictMode>
root.render(<App/>);

// 17之前的写法
// ReactDOM.render(<App/>, document.getElementById("root"));
