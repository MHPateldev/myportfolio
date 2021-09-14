import "./intro.scss";
import { init } from "ityped";
import { useEffect } from "react";

export default function Intro() {
  // const textRef = useRef();

  useEffect(() => {
    const f = document.getElementById("firstLine");
    const s = document.getElementById("secLine");
    const t = document.getElementById("thirdLine");
    const fo = document.getElementById("forthLine");
    init(f, {
      showCursor: true,
      loop:false,
      strings: ["Hi,my name is"],
      onFinished:function(){
        f.nextElementSibling.remove();
        init(s,{
          showCursor: true,
          loop:false,
          typeSpeed: 100,
          strings: ["Maulik Patel"],
          onFinished:function(){
            s.nextElementSibling.remove();
            init(t,{
              showCursor: true,
              loop:false,
              strings: ["And I'm a Software Developer."],
              onFinished:function(){
                t.nextElementSibling.remove();
                init(fo,{
                  showCursor: true,
                  backSpeed: 60,
                  backDelay: 1000,
                  strings: ["I like developing new apps..","I like learning new tech and play with them..","I like listening to music and read books..","I like helping others.."]
                })
              }
            })
          }
        })

      }
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
              <span id="firstLine"></span>  
          </h2>
          <h1>
             <span id="secLine"></span>             
          </h1>
          <h3>
              <span id="thirdLine"></span>            
          </h3>
          <h4>
              <span id="forthLine"></span>            
          </h4>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
