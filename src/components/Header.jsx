import { MarkGithubIcon } from "@primer/octicons-react";
import { useState } from "react";

import "../styles/header.css";

const Header = () => {
    const [isDarkTheme,toggleTheme] = useState(false);

    const themeBtnHandler = () =>{
     toggleTheme(prev=>!prev);
    }

  return (
    <header className="header">
      <div>
        <MarkGithubIcon size={24} verticalAlign="middle" />
        <span className="ml-10">GitHub Profile Viewer</span>
      </div>
      <div>
        <button className="btn btn-theme" onClick = {themeBtnHandler}>{isDarkTheme ? "light" : "dark"}</button>
      </div>
    </header>
  );
};

export default Header;
