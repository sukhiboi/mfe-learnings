import React from "react";

const HelloWorldHost1 = React.lazy(() => import("Host1/HelloWorld"));
const HelloWorldHost2 = React.lazy(() => import("Host2/HelloWorld"));

function App() {
  return (
    <div style={{
      background: "rgb(255 0 0 / 0.5)",
      border: "2px solid red",
      margin: "1rem"
    }}>
      <h1>Container</h1>
      <HelloWorldHost1 />
      <HelloWorldHost2 />
    </div>
  );
}

export default App;
