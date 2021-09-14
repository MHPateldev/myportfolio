import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Marc Guilbeault",
      title: "Director, Lambton Alumni Association",
      link: "https://www.linkedin.com/posts/maulikhpatel_motivation-lcit-xmas-activity-6614245064514375680-uVle",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEdd43aOe6GnA/profile-displayphoto-shrink_100_100/0/1622540535640?e=1635379200&v=beta&t=cPrDJHaxObGMvEYt65qnKhN9eJCQ1Ac0tTETPYrojhM",
      icon: "assets/linkedin.png",
      desc:
        "Such a special moment, Maulik, to be honoured by President, Hufeng Chen, and Director, Michael Vourakes- we are very proud of you and look forward to watching you make your dreams come true. Sincerest congratulations...",
    },
    {
      id: 2,
      name: "Ankit Bhardwaj",
      title: "Fellow Student at LCIT",
      link:"https://www.linkedin.com/in/maulikhpatel/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3QyJHnZnQDyQhWfRRkvngA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHbow1a9ElGLA/profile-displayphoto-shrink_100_100/0/1609652949642?e=1635379200&v=beta&t=zy_4-6F_7jMzOBq8_QR8CMRgaO4W3UBRllgEH30oPSw",
      icon: "assets/linkedin.png",
      desc:
        "Person with a great protential. Helped me through out the Diploma. Worked with him in almost all the projects and tasks. Helped me to find and learn the new programming logics..",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Gopal Shabhad",
    //   title: "Jr Software Engineer at ",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <a href={d.link}><img src="assets/right-arrow.png" className="left" alt="" /></a>
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
