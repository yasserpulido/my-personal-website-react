import React from "react";

import MainNav from "./shared/navigation/MainNav";
import Introduction from "./shared/introduction/Introduction";
import Conclusion from "./shared/conclusion/Conclusion";
import CurriculumVitae from "./curriculum-vitae/CurriculumVitae";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <MainNav />
      <Introduction />
      <main>
        <CurriculumVitae />
      </main>
      <Conclusion />
    </React.Fragment>
  );
}

export default App;
