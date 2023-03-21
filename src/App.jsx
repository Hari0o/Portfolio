import Contact from "./component/Contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
import Testinomial from "./component/testinomials/Testinomials";
import Topbar from "./component/topbar/Topbar";
import Works from "./component/works/Works";
import Intro from "./component/Intro/Intro";
import './app.scss'
import { useState } from "react";
import Menu from "./component/Menu/Menu";

function App() {
  const [menuOpen,setOpen]=useState(false)
  return (
    <div className="App">
      <Topbar menu={menuOpen} setOpen={setOpen} />
      <Menu menu={menuOpen} setOpen={setOpen}/>
      <div className="section">
        <Intro />
        <Portfolio/>
        <Works />
        <Testinomial/>
        <Contact/>
    </div>
    </div>
  );
}

export default App;
