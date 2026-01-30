import React from "react";

const HelloWorldHost4 = React.lazy(() => import("Host4/HelloWorld"));

export default function HelloWorld() {
  return (
    <div>
      <h2>Hello from Host 3</h2>
      <HelloWorldHost4 />
    </div>
  );
}
