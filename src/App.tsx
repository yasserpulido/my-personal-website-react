import React from "react";

import "./App.css";

import MainNav from "./shared/navigation/MainNav";
import Introduction from "./shared/introduction/Introduction";
import Conclusion from "./shared/conclusion/Conclusion";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <MainNav />
      <Introduction />
      <main>Main Works!</main>
      <Conclusion />
    </div>
  );
}

export default App;
