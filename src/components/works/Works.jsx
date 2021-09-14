import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://media-exp1.licdn.com/dms/image/C560BAQF4Yeg9hKvTEg/company-logo_100_100/0/1569872031469?e=1637798400&v=beta&t=Rquzw8FqI_9nUEWe8rFCjSFkMA5JErAVY9mGRk3ZtVo",
      title: "Jr Software Engineer",
      desc:
        "Developing new generation user onboarding, patent publishing and multipurpose web applications for Art, Design and Technology industries ",
      img:
        "./static/projects/art2.jpg"
    },
    {
      id: "2",
      icon: "https://media-exp1.licdn.com/dms/image/C560BAQE6Wr9RUG3OuA/company-logo_100_100/0/1533066385525?e=1637798400&v=beta&t=1F_qhK04IGhc1uuXnHSJUfI99LR49TALECVd5QRwKlc",
      title: "Jr Analyst",
      desc:
        "Provided services to US's biggest television service provide AT&T",
      img:
        "./static/projects/directv.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "President Award Winner of Lambton College",
      desc:
        "Achieved excellent GPA and helping fellow students with thier problems while volunteering for peer mentor",
      img:
        "./static/projects/award2019Per.jpg",
    },
  ];
  
  const [currentShow, setCurrentShow] = useState(data[0]);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const hideContent = () =>{
      const current = document.getElementById(currentShow.id);
      // const flag = current.hasAttribute("hide");
      console.log(current)
      
  }
  
  const showContent = (item) =>{
     setCurrentShow(item);
     console.log(item);

  }

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item" >
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p className="hide" id={d.id}>{d.desc}</p>
                  <span onClick={(d)=>{ hideContent(); showContent(d);}}>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
  // build
}
