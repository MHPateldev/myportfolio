import "./topbar.scss";
import { Person, Mail, Description } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Maulik Patel
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (647)-642-1865</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>maulikhpatel1@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Description className="icon" />
            <span> <a href="./static/doc/resume.pdf" download>Resume</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
